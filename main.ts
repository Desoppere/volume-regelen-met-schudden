input.onButtonPressed(Button.A, function () {
    geluidsterkte = 0
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    geluidsterkte += 30
    basic.showIcon(IconNames.EighthNote)
    basic.clearScreen()
})
let geluidsterkte = 0
geluidsterkte = 0
music.setVolume(geluidsterkte)
basic.forever(function () {
    music.ringTone(349)
    music.setVolume(geluidsterkte)
})
