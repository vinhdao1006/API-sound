const axios = require("axios")
const fs = require("fs")
const { fstat } = require("fs")
// const { Buffer } = require('buffer')
// const { Base64 } = require("js-base64")
// const play = require('audio-play');
// const load = require('audio-loader');

const speech = async (text, gender) => {
    const {data} = await axios.post("https://www.ura.hcmut.edu.vn/tts/speak", {
        text,
        gender,
    })
    const {speech, speech_fm} = data
    console.log(data)
    return gender == 'male' ? speech : speech_fm
}

const getData = async () => {
    const speak = await speech("Xin chao hom nay troi rat dep", "male")
    return speak
}

getData()


