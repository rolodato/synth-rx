import Rx from 'rxjs';
import range from 'lodash-es';

const audioCtx = new AudioContext();
const frameCount = audioCtx.sampleRate * 2.0;
const buffer = audioCtx.createBuffer(1, frameCount, audioCtx.sampleRate);
const bufferData = buffer.getChannelData(0);
const msPerSample = 0.024390243902439;
console.log(frameCount);
// Rx.Observable.interval(msPerSample).take(frameCount).do(i => {
//     // bufferData[i] = Math.random() * 2 - 1;
//     // console.log(bufferData[i], i);
// }).subscribe(() => {
//     const source = audioCtx.createBufferSource();
//     source.buffer = buffer;
//     source.connect(audioCtx.destination);
//     source.start();
// });

const step = 1 / frameCount;
for (var i = 0; i < frameCount; i++) {
    bufferData[i] = 0.5;
    // console.log(bufferData[i]);
}
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start();
