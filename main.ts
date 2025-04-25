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
    story.printCharacterText("Wake up.", "Unknown Voice")
    story.printCharacterText("WAKE UP!", "Unknown Voice")
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
        `,img`
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
        `],
    400,
    false
    )
    pause(2800)
    story.printCharacterText("What is it?", "You")
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
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
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
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
        `],
    700,
    false
    )
    pause(2800)
    story.printCharacterText("W-w-where am I?", "You")
    story.cancelCurrentCutscene()
})
