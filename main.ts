basic.forever(function () {
    music.playMelody("C D E F - - - - ", 600)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.ringTone(208)
    music.setVolume(255)
    music.changeTempoBy(5e+67)
})
