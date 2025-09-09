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
    rock_sprite_images = []
    itr = 1
    for (let index = 0; index < number_of_rocks; index++) {
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
        list2.insertAt(itr, mySprite2)
        rock_sprite_images.insertAt(itr, full_rock)
        startpos = 20
        startpos = startpos * randint(2, 6)
        itr += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rock, function (sprite, otherSprite) {
    for (let value of rock_sprite_images) {
        console.log(value)
    }
    if (controller.A.isPressed()) {
        itr = 1
        for (let index = 0; index < number_of_rocks; index++) {
            console.log(rock_sprite_images[itr])
            rocksprites = list2[itr]
            rock_image = rock_sprite_images[itr]
            if (mySprite.overlapsWith(rocksprites) && rock_image == 2) {
                pause(animation_time)
                rocksprites.setImage(assets.image`Part_rock`)
                full_rock = 1
                rock_sprite_images[itr] = full_rock
                itr += 1
            } else if (mySprite.overlapsWith(rocksprites) && rock_image == 1) {
                pause(animation_time)
                rocksprites.setImage(assets.image`Emberal`)
                full_rock = 0
                rock_sprite_images[itr] = full_rock
                itr += 1
            }
        }
    }
})
let rock_image = 0
let rocksprites: Sprite = null
let full_rock = 0
let mySprite2: Sprite = null
let itr = 0
let rock_sprite_images: number[] = []
let list2: Sprite[] = []
let startpos = 0
let mySprite: Sprite = null
let number_of_rocks = 0
let animation_time = 0
animation_time = 200
number_of_rocks = 3
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
