namespace SpriteKind {
    export const rock = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`pickaxe-dig`,
    animation_time,
    false
    )
})
sprites.onCreated(SpriteKind.Player, function (sprite2) {
    startpos = 20
    list2 = []
    rock_image = []
    itr = 1
    for (let index = 0; index < 3; index++) {
        console.log(startpos)
        mySprite2 = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ........ffffff..................
            ........ffffff..................
            .......feeeeeeff................
            .......feeeeeeff................
            .......feeeeeeff................
            .......feeeeeeff................
            .......feeeeeeff................
            .......feeeeeefffff....ffffff...
            .......feeeeeefffff....ffffff...
            .....ffeeeeeeeeeeeef..feeeeeeff.
            .....ffeeeeeeeeeeeef..feeeeeeff.
            ....feeeeeeeeeeeeeeffffeeeeeeeef
            ....feeeeeeeeeeeeeefeeeeeeeeeeef
            ....feeeeeeeeeeeeeefeeeeeeeeeeef
            .fffeeeeeeeeeeeeeeefeeeeeeeeeeef
            .fffeeeeeeeeeeeeeeefeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeffeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeffeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeffeeeeeeeeef
            `, SpriteKind.rock)
        full_rock = 2
        mySprite2.setPosition(startpos, 95)
        list2.unshift(mySprite2)
        rock_image.insertAt(mySprite2, full_rock)
        startpos = 20
        startpos = startpos * randint(2, 6)
        itr += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rock, function (sprite, otherSprite) {
    for (let value of rock_image) {
        console.log(value)
    }
    if (controller.A.isPressed()) {
        itr = 1
        for (let rocksprites of list2) {
            console.log(rock_image[itr])
            if (mySprite.overlapsWith(rocksprites) && rock_image[itr] == 2) {
                pause(animation_time)
                rocksprites.setImage(assets.image`Part_rock`)
                full_rock = 1
                rock_image[itr] = full_rock
                itr += 1
            } else if (mySprite.overlapsWith(rocksprites) && rock_image[itr] == 1) {
                pause(animation_time)
                rocksprites.setImage(assets.image`Emberal`)
                full_rock = 0
                rock_image[itr] = full_rock
                itr += 1
            }
        }
    }
})
let full_rock = 0
let mySprite2: Sprite = null
let itr = 0
let rock_image: number[] = []
let list2: Sprite[] = []
let startpos = 0
let mySprite: Sprite = null
let animation_time = 0
music.play(music.createSong(hex`0078000408020300001c00010a006400f4016400000400000000000000000000000000050000042a0004000800012c08000c0001290c001000012510001400012214001800011e18001c00011b1c002000011901001c000f05001202c102c20100040500280000006400280003140006020004300000000400012c04000800012908000c0001250c001000012210001400011e14001800011b18001c0001191c002000011902001c000c960064006d019001000478002c010000640032000000000a060005240008000c00012c0c001000012910001400012514001800012218001c00011e1c002000011b`), music.PlaybackMode.InBackground)
animation_time = 200
scene.setBackgroundImage(img`
    cccbbbbbbbbbbccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbccccccccccbbbbbbbbbbbbccccccccccccccccccccbbbbbcccccccccccccccccccccccccc
    ccbbbbbbbbbbbcccccccccccccbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbcccccccccccccccccccccccc
    ccbbbbbbbbbbbcccccccccccccbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbccccccccccccccccccccc
    ccbbbbbbbbbbbcccccccccccccbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbccccccccccccccccccccc
    ccbbbbbbbbbbbcccbbbbbbccccbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbccccccccccccccccc
    cbbbbbbbbbbbbcccbbbbbbccccbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbcccccccbbbbbcccc
    cbbbbbbbbbbbbcccbbbbbbccccbbbbbbbbbbbbbcccccbbbbbbbbbbcccbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbccccccbbbbbbcccc
    cbbbbbbbbbbbbcccbbbbbbccccbbbbbbbbbbbbbbccccbbbbbbbbbbbccbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbccc
    cbbbbbbbbbbbccccbbbbbbbccccbbbbbbbbbbbbbccccbbbbbbbbbbbccbbbbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbbbbbcccbbbbbbccccccbbbbbbbbbbbbbbbbbbcccccbbbbbbbbccc
    cbbbbbbbbbbbcccbbbbbbbbbbccccbbbbbbbbbbbbcccbbbbbbbbbbbcccbbbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbcccccccbbbbbbbcccccbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbcc
    cbbbbbbbbbbccccbbbbbbbbbbbcccccccbbbbbbbbbccbbbbbbbbbbbcccbbbbbbbbccccbbbbbbbbbbcccccbbbbbbbbccccccccccccccccccccbbbbbbbbbcccccbbbbbbbbbbbbbbccccccccbbbbbbbbbcc
    cbbbbbbbbbbccccbbbbbbbbbbbbccccccbbbbbbbbbccbbbbbbbbbbbcccbbbbbbccccccbbbbbbbbbbcccccbbbbbbbbccccccccccccccccccccbbbbbbbbbcccccccbbbbbbbbbbbbccccccccbbbbbbbbbcc
    cbbbbbbbbbcccccbbbbbbbbbbbbbccccccbbbbbbbbccbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbcccbbbbbbbbbbcccccbbbbbcccccccccbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbcc
    cbbbbbbbbccccccbbbbbbbbbbbbbbcccccbbbbbbbbccbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbccbbbbbbbbbbccccbbbbbbcccccccccbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbbbcc
    cbbbbbbccccccccbbbbbbbbbbbbbbbccccbbbbbbbbccbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbcbbbbbbbbbbbbcccbbbbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccbbbbbbbbbcc
    ccccccccccccccccbbbbbbbbbbbbbbbcccbbbbbbbbccbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbcbbbbbbbbbbbbcccbbbbbbbbbccccccbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbccc
    ccccccccbbbbbbbccbbbbbbbbbbbbbbccccbbbbbbbccbbbbbbbbbbbccccbbbbbbbccccbbbbbbbbbbbbcbbbbbbbbbbbbcccbbbbbbbbbccccccbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbccc
    cccccccbbbbbbbbcccbbbbbbbbbbbbbccccbbbbbbbccbbbbbbbbbccccbbbbbbbbbbcccbbbbbbbbbbbbcbbbbbbbbbbbbcccbbbbbbbbbccccccbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbccc
    ccccbbbbbbbbbbbccccbbbbbbbbbbbbccccbbbbbbccccccccccccccccbbbbbbbbbbcccbbbbbbbbbbbbcbbbbbbbbbbbbcccbbbbbbbbbccccccbbbbbbbbbbbbccccbbbbbbbbbbbbcccccccbbbbbbbbcccc
    cbbbbbbbbbbbbbbcccccbbbbbbbbbbbcccccccccccccccccccccccccbbbbbbbbbbbccccbbbbbbbbbbbcbbbbbbbbbbbbccccbbbbbbbbccccccbbbbbbbbbbbbcccbbbbbbbbbbbbbcccccccbbbbbbbbcccc
    bbbbbbbbbbbbbbbbbbcccbbbbbbbbbbcccccccccccccccbbbbbcccccbbbbbbbbbbbcccccbbbbbbbbbbcbbbbbbbbbbbcccccbbbbbbbbccccccbbbbbbbbbbbbcccbbbbbbbbbbbbbcccccccbbbbbbbccccc
    bbbbbbbbbbbbbbbbbbbbccbbbbbbbbbccccccccbbbbbbbbbbbbcccccbbbbbbbbbbbccccccbbbbbbbbbcbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbccccbbbbbbbbbbbbbccbbbbbbbbbbbbccccc
    bbbbbbbbbbbbbbbbbbbbcccbbbbbbbbccccccbbbbbbbbbbbbbbcccccbbbbbbbbbbbcccccccccbbbbbbcbbbbbbbbbbcccccccbbbbbbbccccccbbbbbbbbbbbccccbbbbbbbbbbbbbcbbbbbbbbbbbbbccccc
    bbbbbbbbbbbbbbbbbbbbcccbbbbbbbbccccccbbbbbbbbbbbbbbbbcccbbbbbbbbbbbccccccccccccccccbbbbbbbbbccccccccbbbbbbcccccccbbbbbbbbbbbccccbbbbbbbbbbbbbcbbbbbbbbbbbbbccccc
    bbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbcccccccccccccbbbbbbcccccccccccbbbbbcccccccbbbbbbbbbbbccccbbbbbbbbbbbbccbbbbbbbbbbbbbccccc
    bbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbccccbbbbbbbbbbbbccbbbbbbbbbbbbbccccc
    cccccccbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbccccbbbbbbbbbbbbbcbbbbbbbbbbbbbbcccc
    cccccccbbbbbbbbbbbbbcccccbbbbbbbbbcccbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbcccccbbbbbbbbbbbccccbbbbbbbbbbbbbcbbbbbbbbbbbbbbcccc
    cccccccbbbbbbbbbbbbbccbbbbbbbbbbbbbccccccccccbbbbbbbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbbcccbbbbbbbbbbbbbbbbccccbbbbbbbbbbccccbbbbbbbbbbbbbcbbbbbbbbbbbbbbcccc
    bbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccbbbbbbbbbccbbbbbbbbbbbbbbbbccccbbbbbbbbbbccccbbbbbbbbbbbbbccbbbbbbbbbbbbbcccc
    bbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccbbbbbbbbbbcbbbbbbbbbbbbbbbbcccccbbbbbbbbbccccbbbbbbbbbbbbbcccbbbbbbbbbbbbcccc
    bbbbbbbbccbbbbbbbbcccbbbbbbbbbbbbbbbccccbbbbbbbbbbcccccbbbbbbcccbbbbbbbbbbbbbbbccccbbbbbbbbbbcbbbbbbbbbbbbbbbbccccccbbbbbbbcccccbbbbbbbbbbbbbccccbbbbbbbbbbbcccc
    bbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbccccbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbcbbbbbbbbbbbbbbbbccccccbbbbbcccccccbbbbbbbbbbbbbcccccbbbbbbbbbbcccc
    bbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbccbbbbbbbbbbbbbbbccccccbbbbbcccccccbbbbbbbbbbbbbccccccbbbbbbbbbcccc
    bbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbccccbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbbbcccc
    bbbbbbbbbbbccccccccccbbbbbbbbbbbbbbccccbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbcccccbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbccccc
    bbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbccccbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbcccccbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbccccbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbccccccbbbbbcccccbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbccccbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbcccccccccccccccccbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbcccccccccbbbbbbbccccbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbccccccbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccc
    ccbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbcccccbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbcccccccccc
    cccbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbcccbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbcccccbbbbbbbbbccccccccbbbbbbbbbcccccc
    ccccbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbcccbbbbbbbcccccccccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbccccccbbbbbbbbbbbccccc
    cccccbbbbbbbbbbbbbcccbbbbbbccccccccccbbbbbbbbbbbbcccccbbbbbbbbbbbbbccccbbbbbccccccccccccccbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbcccbbbbbbbbbbbbccccc
    cccccbbbbbbbbbbbbbcccbbbbbbbbccccccccbbbbbbbbbbbbcccccbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbcccbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccc
    ccccccbbbbbbbbbbbcccbbbbbbbbbbbbcccccbbbbbbbbbbbccccccbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbcccccccccbbbbbbbbcccbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccc
    ccccccbbbbbbbbbbccccbbbbbbbbbbbbbccccbbbbbbbccccccccccbbbbbbbbbbbccccccccccccccbbbbbbbbbccccbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccc
    cccccccbbbbbbcccccccbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbcccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccc
    ccccccccccccccccccccbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbccccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccc
    ccccccccccccccccccccbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbcccbbbbbbbbbbbccccccccccccccccccccccbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccc
    cccccccccccccccccccccccccbbbbbbbbbbbcccccccccbbbbbbbbbcccccccccccbbbbbbbccccbbbbbbbbbbbbbbcccbbbbbbbbbbbcccbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccc
    cccccccccccccccccccccccccbbbbbbbbbbbbcccccbbbbbbbbbbbbbcccccccccbbbbbbbbbbccbbbbbbbbbbbbbbcccbbbbbbbbbbbccbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbccccbbbbbbbbbbbccccc
    ccccbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbcccccbbbbbbbbbbbbbccccccccbbbbbbbbbbbbccbbbbbbbbbbbbbcccbbbbbbbbbbcccbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbccccccbbbbbbbbbccccc
    bbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbcccbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbbbbbcccbbbbbbbbbbbbbccccccccccbbbbbbbbccccccccccbbbbbbbcccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbbbbccccbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbbbcccccbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbcccccccbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbcccccccccbbbbbbbbbbbcbbbbbbbbcccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbcccccccccccbbbbbbbbbccbbbbbbbbccccccccccbbbbbbbbbccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbbccccbbbbbccccccccccccccccccccccbbbbbbbbbbbbccccccbbbbbbbbbbbbbcccbbbbbc
    bbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbccccbbbbbcccccccccccbbbbbccccccbbbbbbbbbbbbccccccbbbbbbbbbbbbbcccbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbcccccbbbbbbbbbbbcccccccccccccccccbbbbbbbbbcccccbbbbbbbbbbbbbbccccbbbbbbbbbbbbbcccbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbcccccccccccccccccccccbbbbbbbbbbbbbbccccccbbbbbbbbbbbccccbbbbbbbcccccbbbbbbbbbbbccccbbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbbbbbbb
    cccccccccbbbbbbbccccccccccbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbccccccccccbbbbbcccccccccbbbbbbbbcccccbbbbbbbbbbbbbccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbccbbbbbbb
    cccccccccbbbbbbbccccccccccbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbffffffffffffccccccccccccbbbbbbbbcccccbbbbbbbbbbbbbccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbcbbbbbbbb
    cccccccccbbbbbbbccccccccccbbbbbbbbbbbbbbccbbbbbbbbbcccccccbbbbbbbbfffffffffffffffccccccccccbbbbbbbbbcccccbbbbbbbbbbbbbccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbcbbbbbbbb
    cccccccccbbbbbbcccccccccccbbbbbbbbbbbbbbccbbbbbbbbbbccccccbbbbbbbcffffffffffffffffcccccccccbbbbbbbbbcccccbbbbbbbbbbbbbcccbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbb
    cccccccccccccccccbbbbbbbbbcbbbbbbbbbbbbbccbbbbbbbbbbbcccccbbbbbcffffffffffffffffffffcccccccbbbbbbbbbcccccbbbbbbbbbbbbbcccccbbbbbbbbbbbbcccccccccccccccccbbbbbbbb
    ccccccccccccccccbbbbbbbbbbccccbbbbbbbbbbccbbbbbbbbbbbbccccccccccffffffffffffffffffffffcccccbbbbbbbbbccccccccbbbbbbbbbbccccccbbbbbbbbbbbcccccccccbbbbbcccbbbbbbbb
    ccccbbbbbbbcccccbbbbbbbbbbbcccbbbbbbbbbbccbbbbbbbbbbbbccccccccfffffffffffffffffffffffffccccbbbbbbbbcccccccccbbbbbbbbbcccccccbbbbbbbbbbbccbbbbbbbbbbbbcccbbbbbbbb
    ccccbbbbbbbcccccbbbbbbbbbbbbccbbbbbbbbbbccbbbbbbbbbbbbbcccccccffffffffffffffffffffffffffcccbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbbb
    ccccbbbbbbbcccccbbbbbbbbbbbbccbbbbbbbbbbccbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffccbbbbbbbbbbbbcccccccbbbbbbbbbbbcccccbbbbbbbcccbbbbbbbbbbbbbcccccbbbbbb
    cbbbbbbbbbbcccccbbbbbbbbbbbbccbbbbbbbbccccbbbbbbbbbbbbbbcccccfffffffffffffffffffffffffffffcbbbbbbbbbbbbccccccbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbcccccbbbbbb
    cbbbbbbbbbbcccccbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbccccfffffffffffffffffffffffffffffffcbbbbbbbbbbbcccccbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbcccccbbbbbb
    cbbbbbbbbbbbbcccbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffccbbbbbbbbbbccccbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbccccbbbbbbb
    cbbbbbbbbbbbbbcccbbbbbbbbbbbccccbbbbbbbccccbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffccbbbbbbbbbbcccbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbccccbbbbbbb
    cbbbbbbbbbbbbbcccbbbbbbbbbbcccbbbbbbbbbbcccbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffccbbbbbbbbbbcccbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbccccbbbbbbb
    cbbbbbbbbbbbbbcccbbbbbbbbcccbbbbbbbbbbbbcccbbbbbbbbbbbbbccffffffffffffffffffffffffffffffffbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbccccbbbbbbb
    cbbbbbbbbbbbbbcccbbbbbbbccccbbbbbbbbbbbbcccbbbbbbbbbbbbbccffffffffffffffffffffffffffffffffbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbccbbbbbbcccccbbbbbbbbbbbbbccccbbbbbbb
    cbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbcfffffffffffffffffffffffffffffffffbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbccbbbbbbcccccbbbbbbbbbbbbbccccbbbbbbb
    cbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbccccbbbbbbbbbbbccfffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbccbbbbbbcccccbbbbbbbbbbbbbccccbbbbbbb
    cbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccbbbbbbbbbbcffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbcccbbbbbbccccccbbbbbbbbbbbbccccccbbbbb
    cbbbbbbbbbbbccccbbbbbbbccbbbbbbbbbbbbbbbccccccccccccccccffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbcccccccccccccccccccccbbbbbbbbcccccccccbbbbbbbccccccccccccc
    cbbbbbbbbbbcccccbbbbbbbbcbbbbbbbbbbbbbbbcccccccccccccccfffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbcccccccccccccccccccccbbbbbbbbcccccccccccccccccccbbbbbbbbbc
    ccbbbbbbbbbcccccbbbbbbbbbccbbbbbbbbbbbbbcccccccccccccccfffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbccccccccccccccbbbbbbcbbbbbbbbcccccccccccccccccccbbbbbbbbbc
    ccbbbbbbbbccccccbbbbbbbbbbcccbbbbbbbbccccccccbbbbbbbbbffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbcccccbbbbbccbbbbbbbbcbbbbbbbbcccccccccccccccccccbbbbbbbbbc
    ccccccccccccbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffbbbbbbbbbbbcccccbbbbbcbbbbbbbbbcbbbbbbbbccccccccccccccbbbbbbbbbbbbbbc
    ccccccccccccbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffbbbbbbbbbcccccbbbbbbbbbbbbbbbcbbbbbbbbccccccccccccccbbbbbbbbbbbbbbb
    cccbbbbbccccbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffbbbbbbbcccccbbbbbbbbbbbbbbbbccbbbbbbbccccccccccccccbbbbbbbbbbbbbbb
    ccbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffcbbbbbbccccbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbb
    cbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbb
    bbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffbbbbbccccbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbb
    bbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffccccccccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbb
    bbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffcccccccbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbb
    bbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffccccbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbb
    bbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbb
    bbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffccbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbb
    bbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbcccbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbb
    cbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbcccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbb
    cbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbcccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbccccccccccccccccbbbbbcccccccccccccccccccbbbbbbbb
    cbbbbbbbbbbbbbcccccccccccbbbbbbbbccccccccccdddddddddddffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbcccccccddddddddddddcccccccccccccccccccccccbbbbbb
    cbbbbbbbbbbbcccccccccccccdddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbccdddddddddddddddddddddddddddddddddccccccccbbbbb
    cbbbbbbbbbbccccccccddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddccccbbbb
    cbbbbbbbbbcccccddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffdfffffffffffffffffffcbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddccccc
    ccccccccccddddddddddddddddeeddddddddddddddddddddddddddddddddddddddddddddffffffdddfffffffffffffffffccccccbbbbbbbdddddddddddddddeeeddddddddddddddddddddddddddddccc
    cccccccdddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffccccddbbbbbbdddddddddddddddddedeeddddddddddddddeeddddddddddddd
    cccccddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddedddddddddddddedddddddddddddd
    cccddddddddddddddddddddddeeeeeeeeddddddddddedeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddedddddddddddddd
    cdddddddddddddddeddddddddddddddddddddddddddeeddddeeeeeddddddddddddeeeedddddddddddddddddddddddddddddddddddddddddddddddddddeddddeddddddddddddddddddedddddddddddddd
    ddddddddddddddddedddddddddddddddddddeddddeedeedddddddddddddddddeeedddeedddddddddddddedddddddddddddddddddddddddddddddddddeeddddedddddddddddddddddeddddddddddddddd
    ddddddddddddddddddddeddddddeeeddddddddddeeeeddeedddddddddddddeeddddddeeddddddddddddeddddddddddddddddddddddddddddddddddddeddddddeddddddddddddddddeddddddddddddddd
    dddddddddddddddeddddddddddddddeedddddddedddddddddddddeeeeeeeeeeeeeddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddedddddddddddddddd
    ddddddddddddddddddddddddddddddeddddddeeeeddddddddeeeeeeddddeeddddddddddddddeeeeeedddddddddddddddddeddddddddddddddddddddddddddddddeedddddddddddeedddddddeeddddddd
    dddddddddddedddddddddddddddddddddddeeddddeedddddedddddddddddeeedddddddddddddddddddddddddddddeeeeddeeddddddddddeedddddddddddddddddddeeddddddddddedddddddddeeedddd
    dddddedddddddddddddddddeddeedddddeeeddddddedddddeeedddddddddeeeddddddeeddddddddeeddddeddddddddddeeeeeedddddddddedddddddddddddddddddddddddddddddedddddeeeeddeeeed
    dddddddddddddddddddddddedddeeeeeededdddddddddddeeddddddddddddddeddddddeeddeeeeedddddddedddddddddedddddeeddddddddeeeeededdddddddddddddddddddddddddddeedddddddddde
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddeedddddddddddddeedddddddddddddddddddddddddddddedddddddddddddddddddddddddeeeddddddddddded
    ddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddeeeeeddddddddddddddddddddddddeddddedddddddddddddddddddeddddddddddddddee
    ddddddeddddddddddddddddddddddddddddddddddddddddddddddedddddddddedddddddddddddddeeddddddddddddddddddddddddddddddddddddddeddeddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddeeddddddddedddddddddddddddeddddddddddddddddddddddddddddddddddddddddeedddddddddddddddddddddddddddddddddddddd
    `)
mySprite = sprites.create(assets.image`pickaxe`, SpriteKind.Player)
mySprite.setPosition(74, 88)
controller.moveSprite(mySprite)
