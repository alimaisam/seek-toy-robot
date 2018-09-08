import Direction from './direction';

export const newPosition = robot => {
    var newX = robot.position.x;
    var newY = robot.position.y;

    switch (robot.direction) {
        case Direction.EAST:
            newX += 1;
            break;

        case Direction.WEST:
            newX -= 1;
            break;
        
        case Direction.NORTH:
            newY += 1;
            break;

        case Direction.SOUTH:
            newY -= 1;
            break;
    }

    return {
        'newX': newX,
        'newY': newY
    }
}

export const validateNewPosition = (newposition, table) => {
    return (
        newposition.newX <= (table.x - 1) &&
        newposition.newX >= 0 &&
        newposition.newY <= (table.y - 1) &&
        newposition.newY >= 0
    )
}