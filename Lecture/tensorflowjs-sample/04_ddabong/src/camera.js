import * as scatter from 'scatter-gl';

import * as params from './shared/params';
import { isMobile } from './shared/util';

// These anchor points allow the hand pointcloud to resize according to its
// position in the input.
const ANCHOR_POINTS = [[0, 0, 0], [0, 0.1, 0], [-0.1, 0, 0], [-0.1, -0.1, 0]];

const fingerLookupIndices = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
}; // for rendering each finger as a polyline

const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [0, 9], [9, 10], [10, 11], [11, 12],
    [0, 13], [13, 14], [14, 15], [15, 16],
    [0, 17], [17, 18], [18, 19], [19, 20]
];

function createScatterGLContext(selectors) {
    const scatterGLE1 = document.querySelector(selectors);
    return {
        scatterGLE1,
        scatterGL: new scatter.ScatterGL(scatterGLE1, {
            'rotateOnStart': true,
            'selectEnabled': false,
            'styles': {polyline: {defaultOpacity: 1, deselectedOpacity: 1}}
        }),
        scatterGLHasInitialized: false,
    };
}

const scatterGLCtxtLeftHand = createScatterGLContext('#scatter-gl-container-left');
const scatterGLCtxtRightHand = createScatterGLContext('#scatter-gl-container-right');

export class Camera {
    constructor() {
        this.video = document.getElementById('video');
        this.canvas = document.getElementById('output');
        this.ctx = this.canvas.getContext('2d');
    }

    
}