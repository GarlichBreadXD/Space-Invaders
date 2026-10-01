input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Shoot = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    Shoot.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (Shoot.isTouching(enemy)) {
            game.addScore(1)
            enemy.delete()
            Shoot.delete()
        }
    }
    Shoot.delete()
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.pause()
    if (enemy.get(LedSpriteProperty.Y) == 0) {
        for (let index = 0; index < 5000; index++) {
            enemy.delete()
            basic.clearScreen()
        }
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
    basic.pause(1000)
    control.reset()
})
let enemy: game.LedSprite = null
let Shoot: game.LedSprite = null
let ship: game.LedSprite = null
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . # .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    . . . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(500)
basic.clearScreen()
basic.showString("Space Invaders")
basic.pause(200)
basic.clearScreen()
ship = game.createSprite(randint(0, 4), 4)
game.setScore(0)
basic.forever(function () {
    if (1 == 1) {
        enemy = game.createSprite(randint(0, 4), 0)
        enemy.set(LedSpriteProperty.Brightness, 150)
        basic.pause(100)
        enemy.turn(Direction.Right, 90)
        for (let index = 0; index < 4; index++) {
            enemy.move(1)
            basic.pause(500)
        }
        if (enemy.isTouching(ship)) {
            game.gameOver()
        }
        if (enemy.isTouchingEdge()) {
            enemy.delete()
        }
    }
})
