describe("Lock", function () {
    let Lock, lock, owner, addr1;
    const oneYearInSeconds = 365 * 24 * 60 * 60;
    let unlockTime;
    let lockedAmount;

    before(async function () {
        const { expect } = await import("chai");
        this.expect = expect;
    });

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        unlockTime = (await ethers.provider.getBlock('latest')).timestamp + oneYearInSeconds;
        lockedAmount = ethers.utils.parseEther("1");

        Lock = await ethers.getContractFactory("Lock");
        lock = await Lock.deploy(unlockTime, { value: lockedAmount });
        await lock.deployed();
    });

    it("Should set the right unlockTime", async function () {
        this.expect(await lock.unlockTime()).to.equal(unlockTime);
    });

    it("Should set the right owner", async function () {
        this.expect(await lock.owner()).to.equal(owner.address);
    });

    it("Should not allow withdrawal before unlock time", async function () {
        await this.expect(lock.withdraw())
            .to.be.revertedWith("You can't withdraw yet");
    });

    it("Should not allow withdrawal by non-owner", async function () {
        // Fast-forward time to after unlock time
        await ethers.provider.send("evm_increaseTime", [oneYearInSeconds]);
        await ethers.provider.send("evm_mine");

        await this.expect(lock.connect(addr1).withdraw())
            .to.be.revertedWith("You aren't the owner");
    });

    it("Should allow the owner to withdraw after unlock time", async function () {
        // Fast-forward time to after unlock time
        await ethers.provider.send("evm_increaseTime", [oneYearInSeconds]);
        await ethers.provider.send("evm_mine");

        await this.expect(() => lock.withdraw())
            .to.changeEtherBalances([owner, lock], [lockedAmount, -lockedAmount]);

        await this.expect(lock.withdraw())
            .to.emit(lock, 'Withdrawal')
            .withArgs(lockedAmount, (await ethers.provider.getBlock('latest')).timestamp);
    });
});
