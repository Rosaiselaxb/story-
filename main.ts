// MOVEMENT ANIMATIONS
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    // your up frames
    characterAnimations.loopFrames(
    PLAYER_1,
    [img`
        . . . 
        `,img`
        . . . 
        `,img`
        . . . 
        `,img`
        . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    // your left frames
    characterAnimations.loopFrames(
    PLAYER_1,
    [img`
        . . . 
        `,img`
        . . . 
        `,img`
        . . . 
        `,img`
        . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
// TILE OVERLAPS
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(PLAYER_1, tiles.getTileLocation(3, 13))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    // your right frames
    characterAnimations.loopFrames(
    PLAYER_1,
    [img`
        . . . 
        `,img`
        . . . 
        `,img`
        . . . 
        `,img`
        . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    // your down frames
    characterAnimations.loopFrames(
    PLAYER_1,
    [img`
        . . . 
        `,img`
        . . . 
        `,img`
        . . . 
        `,img`
        . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(PLAYER_1, tiles.getTileLocation(5, 14))
})
let PLAYER_1: Sprite = null
// PLAYER SETUP
PLAYER_1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(PLAYER_1)
scene.cameraFollowSprite(PLAYER_1)
// INITIAL TILEMAP
tiles.setCurrentTilemap(tilemap`level3`)
// Ask the user for their name
let playerName = game.askForString("What is your name?")
// Greet the player
game.splash("Welcome, " + playerName + "!")
// Ask for a movement speed
let speed = game.askForNumber("Choose your speed (10–100)")
// Apply the chosen speed to PLAYER_1
controller.moveSprite(PLAYER_1, speed, speed)
// Optional: show instructions
game.showLongText("" + "Use the D‑pad to move your character.\nYou chose speed: " + speed, DialogLayout.Center)
