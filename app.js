var infiniteLoopAlternate = anime({
  targets: '#infiniteLoopAlternate .firstWave',
  translateY: -80,
  loop: true,
  direction: 'alternate',
  duration: 6000,
  delay: 5000
});

var infiniteLoopAlternate2 = anime({
  targets: '#infiniteLoopAlternate .secondWave',
  translateY: -65,
  direction: 'alternate',
  loop: true,
  duration: 4000,
  delay: 3500
});

var infiniteLoopAlternate3 = anime({
  targets: '#infiniteLoopAlternate .thirdWave',
  translateY: -45,
  direction: 'alternate',
  loop: true,
  duration: 3500,
  delay: 2000
});

var infiniteLoopAlternate4 = anime({
  targets: '#infiniteLoopAlternate .fourthWave',
  translateY: 0,
  direction: 'alternate',
  duration: 4000,
  delay: 4500
});