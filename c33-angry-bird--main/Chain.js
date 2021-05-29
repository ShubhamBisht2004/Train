class Chain {

    constructor(bodyA, bodyB) {
        var option = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5
        }

        //creating a chain between bodyA & bodyB
        this.chain = Constraint.create(option);
        World.add(myWorld, this.chain);

    }
    show() {
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;
        strokeWeight(5);
        stroke("black");
        line(pos1.x, pos1.y, pos2.x, pos2.y);
    }
}