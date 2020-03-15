'use strict';
import dc from 'damage-calc';
import $ from 'jquery';

const root = document.getElementById('root');
root.innerHTML = '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、'
  + dc.effectiveDamage(100, 50, 30) + '</p>';

const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const loadavg = $('#loadavg');

import io from 'socket.io-client';
const socket = io('http://localhost:30000');
socket.on('server-status', (data) => {
  loadavg.text(data.loadavg.toString());
});