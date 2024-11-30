basic.showString("Rosa dos Ventos")
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    input.calibrateCompass()
    if (input.compassHeading() > 315 || input.compassHeading() < 45) {
        basic.showString("N")
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    } else {
        if (input.compassHeading() > 45 && input.compassHeading() < 135) {
            basic.showString("E")
        } else {
            if (input.compassHeading() > 135 && input.compassHeading() < 225) {
                basic.showString("S")
            } else {
                if (input.compassHeading() > 225 && input.compassHeading() < 315) {
                    basic.showString("O")
                } else {
                    if (input.compassHeading() == 45) {
                        basic.showString("NE")
                    } else {
                        if (input.compassHeading() == 135) {
                            basic.showString("SE")
                        } else {
                            if (input.compassHeading() == 225) {
                                basic.showString("SO")
                            } else {
                                if (input.compassHeading() == 315) {
                                    basic.showString("NO")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
