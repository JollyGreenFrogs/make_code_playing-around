@namespace
class SpriteKind:
    rock = SpriteKind.create()

def on_a_pressed():
    animation.run_image_animation(mySprite,
        assets.animation("""
            pickaxe-dig
            """),
        animation_time,
        False)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_created(sprite2):
    global startpos, list2, rock_sprite_images, itr, mySprite2, full_rock
    startpos = 20
    list2 = []
    rock_sprite_images = []
    itr = 1
    for index in range(number_of_rocks):
        print(startpos)
        mySprite2 = sprites.create(img("""
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
                """),
            SpriteKind.rock)
        full_rock = 2
        mySprite2.set_position(startpos, 95)
        list2.insert_at(itr, mySprite2)
        rock_sprite_images.insert_at(itr, full_rock)
        startpos = 20
        startpos = startpos * randint(2, 6)
        itr += 1
sprites.on_created(SpriteKind.player, on_on_created)

def on_on_overlap(sprite, otherSprite):
    global itr, rocksprites, rock_image, full_rock
    for value in rock_sprite_images:
        print(value)
    if controller.A.is_pressed():
        itr = 1
        for index2 in range(number_of_rocks):
            print(rock_sprite_images[itr])
            rocksprites = list2[itr]
            rock_image = rock_sprite_images[itr]
            if mySprite.overlaps_with(rocksprites) and rock_image == 2:
                pause(animation_time)
                rocksprites.set_image(assets.image("""
                    Part_rock
                    """))
                full_rock = 1
                rock_sprite_images[itr] = full_rock
                itr += 1
            elif mySprite.overlaps_with(rocksprites) and rock_image == 1:
                pause(animation_time)
                rocksprites.set_image(assets.image("""
                    Emberal
                    """))
                full_rock = 0
                rock_sprite_images[itr] = full_rock
                itr += 1
sprites.on_overlap(SpriteKind.player, SpriteKind.rock, on_on_overlap)

rock_image = 0
rocksprites: Sprite = None
full_rock = 0
mySprite2: Sprite = None
itr = 0
rock_sprite_images: List[number] = []
list2: List[Sprite] = []
startpos = 0
mySprite: Sprite = None
number_of_rocks = 0
animation_time = 0
animation_time = 200
number_of_rocks = 3
scene.set_background_image(img("""
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
    """))
mySprite = sprites.create(assets.image("""
    pickaxe
    """), SpriteKind.player)
mySprite.set_position(74, 88)
controller.move_sprite(mySprite)