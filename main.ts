namespace SpriteKind {
    export const npc = SpriteKind.create()
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . f f f f f e f . e 4 4 . . 
    . . f f e e f e e e f 4 d 4 . . 
    . f f f e 2 f f 4 e e f f f . . 
    . f f e 2 f f 4 4 d e 2 2 4 f f 
    f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
    f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
    f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
    f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
    . f f e 2 f f 4 4 d e 2 2 4 f f 
    . f f f e 2 f f 4 e e f f f . . 
    . . f f f e f e e e f 4 d 4 . . 
    . . . f f f f f e f . e 4 4 . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let hutOFstart = tilemap`level1`
tiles.setCurrentTilemap(hutOFstart)
scene.cameraFollowSprite(mySprite)
tileUtil.coverAllTiles(assets.tile`myTile`, assets.tile`myTile3`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
story.startCutscene(function () {
    story.printCharacterText("Wake up.")
    story.printCharacterText("WAKE UP!")
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f f f f f e f . e 4 4 . . 
        . . f f e e f e e e f 4 d 4 . . 
        . f f f e 2 f f 4 e e f f f . . 
        . f f e 2 f f 4 4 d e 2 2 4 f f 
        f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
        . f f e 2 f f 4 4 d e 2 2 4 f f 
        . f f f e 2 f f 4 e e f f f . . 
        . . f f f e f e e e f 4 d 4 . . 
        . . . f f f f f e f . e 4 4 . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f f f f f e f . e 4 4 . . 
        . . f f e e f e e e f 4 d 4 . . 
        . f f f e 2 f f 4 e e f f f . . 
        . f f e 2 f f 4 4 d e 2 2 4 f f 
        f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
        . f f e 2 f f 4 4 d e 2 2 4 f f 
        . f f f e 2 f f 4 e e f f f . . 
        . . f f f e f e e e f 4 d 4 . . 
        . . . f f f f f e f . e 4 4 . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f f f f f e f . e 4 4 . . 
        . . f f e e f e e e f 4 d 4 . . 
        . f f f e 2 f f 4 e e f f f . . 
        . f f e 2 f f b 1 d e 2 2 4 f f 
        f f 2 e 2 f e f f d 4 2 2 4 f f 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
        . f f e 2 f f 4 4 d e 2 2 4 f f 
        . f f f e 2 f f 4 e e f f f . . 
        . . f f f e f e e e f 4 d 4 . . 
        . . . f f f f f e f . e 4 4 . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f f f f f e f . e 4 4 . . 
        . . f f e e f e e e f 4 d 4 . . 
        . f f f e 2 f f 4 e e f f f . . 
        . f f e 2 f f 4 4 d e 2 2 4 f f 
        f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
        . f f e 2 f f 4 4 d e 2 2 4 f f 
        . f f f e 2 f f 4 e e f f f . . 
        . . f f f e f e e e f 4 d 4 . . 
        . . . f f f f f e f . e 4 4 . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f f f f f e f . e 4 4 . . 
        . . f f e e f e e e f 4 d 4 . . 
        . f f f e 2 f f 4 e e f f f . . 
        . f f e 2 f f b 1 d e 2 2 4 f f 
        f f 2 e 2 f e f f d 4 2 2 4 f f 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f f 2 e 2 f e 4 4 d 4 2 2 4 f f 
        . f f e 2 f f 4 4 d e 2 2 4 f f 
        . f f f e 2 f f 4 e e f f f . . 
        . . f f f e f e e e f 4 d 4 . . 
        . . . f f f f f e f . e 4 4 . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f f f f f e f . e 4 4 . . 
        . . f f e e f e e e f 4 d 4 . . 
        . f f f e 2 f f 4 e e f f f . . 
        . f f e 2 f f b 1 d e 2 2 4 f f 
        f f 2 e 2 f e f f d 4 2 2 4 f f 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f 2 2 e 2 f e 4 d d 4 2 2 5 f . 
        f f 2 e 2 f e f f d 4 2 2 4 f f 
        . f f e 2 f f b 1 d e 2 2 4 f f 
        . f f f e 2 f f 4 e e f f f . . 
        . . f f f e f e e e f 4 d 4 . . 
        . . . f f f f f e f . e 4 4 . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    400,
    false
    )
    story.cancelCurrentCutscene()
})
