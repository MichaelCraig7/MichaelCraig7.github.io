var infiniteLoopAlternate = anime({
  targets: '#infiniteLoopAlternate .firstWave',
  translateY: -50,
  direction: 'reverse',
  duration: 4000,
});

var infiniteLoopAlternate2 = anime({
  targets: '#infiniteLoopAlternate .secondWave',
  translateY: -55,
  direction: 'alternate',
  loop: true,
  duration: 4000,
  delay: 1500
});

var infiniteLoopAlternate3 = anime({
  targets: '#infiniteLoopAlternate .thirdWave',
  translateY: -75,
  direction: 'alternate',
  loop: true,
  duration: 4000,
  delay: 2500
});

var infiniteLoopAlternate4 = anime({
  targets: '#infiniteLoopAlternate .fourthWave',
  translateY: -65,
  direction: 'alternate',
  loop: true,
  duration: 4000,
  delay: 4500
});