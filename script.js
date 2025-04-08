function playMusic() {
  const music = document.getElementById('background-music');
  music.play();
}

function pauseMusic() {
  const music = document.getElementById('background-music');
  music.pause();
}

window.addEventListener('DOMContentLoaded', function () {
  playMusic();
});

document.body.addEventListener('click', playMusic, { once: true });
const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];
const timer = document.getElementById('timer');

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

// const countDown = new Date('Oct 22, 2023 00:00:00').getTime();
const countDown = new Date('Apr 09, 2025 00:15:00').getTime();

const x = setInterval(function () {
  let now = new Date().getTime(),
    distance = countDown - now;
  (document.getElementById('days').innerText = Math.floor(distance / day)),
    (document.getElementById('hours').innerText = Math.floor(distance / hour)),
    (document.getElementById('minutes').innerText = Math.floor(
      (distance % hour) / minute
    )),
    (document.getElementById('seconds').innerText = Math.floor(
      (distance % minute) / second
    ));

  if (distance < 0) {
    timer.classList.add('d-none');
    confetti();
    clearInterval(x);
    if (document.getElementById('background-music').paused) {
      playMusic();
    }
    _slideOne();
  }
}, second);

const _slideOne = function () {
  const tap = document.getElementById('tap');
  const slideOne = document.getElementById('slideOne');
  slideOne.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    tap.addEventListener(
      'click',
      function () {
        // pauseMusic();
        _slideTwo();
      },
      { once: true }
    );
  }, 3000);
};

const _slideTwo = function () {
  const slideOne = document.getElementById('slideOne');
  const tap = document.getElementById('tap');
  const slideTwo = document.getElementById('slideTwo');

  setTimeout(function () {
    slideOne.classList.replace('animate__slideInDown', 'animate__backOutDown');
    tap.classList.add('d-none');
    setTimeout(function () {
      slideOne.classList.add('d-none');
    }, 1000);
  }, 1000);

  slideTwo.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    tap.addEventListener(
      'click',
      function () {
        slideTwo.classList.replace(
          'animate__zoomInDown',
          'animate__fadeOutLeft'
        );
        slideTwo.classList.remove('animate__delay-2s', 'animate__slow');
        tap.classList.add('d-none');
        setTimeout(function () {
          slideTwo.remove();
          // _slideFour();
          // setTimeout(() => {
          //   pauseMusic();
          //   _slideVideo(); // Call the new slide function here
          // }, 500);
          pauseMusic();
          _slideVideo(); // Call the new slide function here
        }, 500);
      },
      { once: true }
    );
  }, 1000);
};

const _slideVideo = function () {
  const slideVideo = document.getElementById('slideVideo');
  const tap = document.getElementById('tap');
  const carousel = document.getElementById('videoCarousel');

  slideVideo.classList.remove('d-none');
  tap.classList.add('d-none');

  $(carousel).on('slid.bs.carousel', function () {
    const isLastSlide = $('.carousel-inner .carousel-item:last').hasClass(
      'active'
    );
    continueButton.classList.toggle('d-none', !isLastSlide);
  });

  continueButton.addEventListener('click', function () {
    slideVideo.classList.add('d-none'); // Hide the video slide
    slideVideo.remove();
    _slideFour(); // Proceed to next slide
    playMusic(); // Optional: Resume music
    continueButton.classList.add('d-none'); // Make the button invisible again
  });
};

$('video').on('play', function (e) {
  $('#videoCarousel').carousel('pause');
});
$('video').on('stop ended', function (e) {
  $('#videoCarousel').carousel();
});

// const _slideThree = function () {
//   const tap = document.getElementById('tap');
//   const slideThree = document.getElementById('slideThree');

//   slideThree.classList.remove('d-none');
//   setTimeout(function () {
//     tap.classList.remove('d-none');
//     document.body.addEventListener('click', function () {
//       slideThree.classList.remove('animate__delay-2s', 'animate__slow');
//       slideThree.classList.replace('animate__fadeInRight', 'animate__fadeOut');
//       tap.remove();
//       setTimeout(function () {
//         slideThree.remove();
//         _slideFour();
//       }, 1000);
//     });
//   }, 43000);
// };

function getRandomPosition(element) {
  var xMax = window.innerHeight - element.offsetHeight;
  var yMax = window.innerWidth - element.offsetWidth;
  var randomX = Math.floor(Math.random() * xMax);
  var randomY = Math.floor(Math.random() * yMax);
  return [randomX, randomY];
}

const _slideFour = function () {
  const slideFour = document.getElementById('slideFour');
  const btns = document.getElementsByTagName('button');
  slideFour.classList.remove('d-none');

  btns[0].addEventListener('click', function () {
    var xy = getRandomPosition(slideFour);
    slideFour.style.top = xy[0] + 'px';
    slideFour.style.left = xy[1] + 'px';
  });

  btns[1].addEventListener('click', function () {
    slideFour.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideFour.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideFour.remove();
      setTimeout(() => {
        _slideFive();
      }, 500);
    }, 1000);
  });
};

// function getRandomPosition(element) {
//   var x = document.body.offsetHeight - element.clientHeight;
//   var y = document.body.offsetWidth - element.clientWidth;
//   var randomX = Math.floor(Math.random() * 500);
//   var randomY = Math.floor(Math.random() * y);
//   return [randomX, randomY];
// }

// const _slideFour = function () {
//   const slideFour = document.getElementById('slideFour');
//   const btns = document.getElementsByTagName('button');
//   slideFour.classList.remove('d-none');

//   btns[0].addEventListener('click', function () {
//     var xy = getRandomPosition(slideFour);
//     slideFour.style.top = xy[0] + 'px';
//     // slideFour.style.left = xy[1] + 'px';
//   });

//   btns[1].addEventListener('click', function () {
//     slideFour.classList.replace('animate__fadeInDown', 'animate__bounceOut');
//     slideFour.classList.remove('animate__delay-2s');
//     setTimeout(function () {
//       slideFour.remove();
//       setTimeout(() => {
//         _slideFive();
//       }, 500);
//     }, 1000);
//   });
// };

const _slideFive = function () {
  const slideFive = document.getElementById('slideFive');
  slideFive.classList.remove('d-none');
  const trims = document.getElementById('trims');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slideFive.addEventListener('animationend', () => {
    slideFive.classList.add('animate__delay-3s');
    slideFive.classList.replace('animate__bounceIn', 'animate__fadeOut');
    trims.classList.add(
      'animate__animated',
      'animate__fadeOut',
      'animate__delay-3s'
    );
    setTimeout(() => {
      trims.remove();
      setTimeout(() => {
        slideFive.remove();
        _slideSix();
      }, 1000);
    }, 6000);
  });
};

const _slideSix = function () {
  const slideSix = document.getElementById('slideSix');
  slideSix.classList.remove('d-none');
};

new TypeIt('#text1', {
  // strings: [
  //   'Hari ini, saya langitkan semua doa terbaik saya untuk kamu.',
  //   'Semoga hal-hal yang membuat kamu runtuh turut menjadi alasan kamu untuk tetap tumbuh.',
  //   'Semoga dunia senantiasa menjaga kamu dimanapun kamu berada.',
  //   'Semoga hari-hari kamu selalu diiringi cinta yang tak pernah ada batasnya.',
  //   'Semoga setiap langkahmu dimudahkan hingga tercapai apa yang kamu inginkan.',
  // ],
  strings: [
    'To my shoopi the best shoopi -',
    'I love you the mostest.',
    "ain't ever gonna step loving you the mostest",
    '',
    '',
    '',
    'Yours, Shoopi',
  ],
  startDelay: 4000,
  speed: 75,
  waitUntilVisible: true,
}).go();

('use strict');

// var onlyOnKonami = false;
var onlyOnKonami = true;

function confetti() {
  // Globals
  var $window = $(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var runFor = 2000;
  var isRunning = true;

  setTimeout(() => {
    isRunning = false;
  }, runFor);

  // Settings
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    pointer = 0;

  var particles = 150,
    spread = 20,
    sizeMin = 5,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -0.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = 0.13,
    dyMax = 0.18,
    dThetaMin = 0.4,
    dThetaMax = 0.7 - dThetaMin;

  var colorThemes = [
    function () {
      return color(
        (200 * random()) | 0,
        (200 * random()) | 0,
        (200 * random()) | 0
      );
    },
    function () {
      var black = (200 * random()) | 0;
      return color(200, black, black);
    },
    function () {
      var black = (200 * random()) | 0;
      return color(black, 200, black);
    },
    function () {
      var black = (200 * random()) | 0;
      return color(black, black, 200);
    },
    function () {
      return color(200, 100, (200 * random()) | 0);
    },
    function () {
      return color((200 * random()) | 0, 200, 200);
    },
    function () {
      var black = (256 * random()) | 0;
      return color(black, black, black);
    },
    function () {
      return colorThemes[random() < 0.5 ? 1 : 2]();
    },
    function () {
      return colorThemes[random() < 0.5 ? 3 : 5]();
    },
    function () {
      return colorThemes[random() < 0.5 ? 2 : 4]();
    },
  ];

  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return ((1 - cos(PI * t)) / 2) * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i,
        l,
        interval,
        a,
        b,
        c,
        d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        (a = domain[i]), (b = domain[i + 1]), (interval = b - a);
        if (dart < measure + interval) {
          spline.push((dart += a - measure));
          break;
        }
        measure += interval;
      }
      (c = dart - radius), (d = dart + radius);

      for (i = domain.length - 1; i > 0; i -= 2) {
        (l = i - 1), (a = domain[l]), (b = domain[i]);
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2);
        // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = sizeMin + sizeMax * random() + 'px';
    outerStyle.height = sizeMin + sizeMax * random() + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + 360 * random() + 'deg)';
    this.axis =
      'rotate3D(' + cos(360 * random()) + ',' + cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = (this.frame % 7777) / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }

  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti

      var theme =
          colorThemes[onlyOnKonami ? (colorThemes.length * random()) | 0 : 0],
        count = 0;

      (function addConfetto() {
        if (onlyOnKonami && ++count > particles) return (timer = undefined);

        if (isRunning) {
          var confetto = new Confetto(theme);
          confetti.push(confetto);

          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);

      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return (frame = requestAnimationFrame(loop));

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  $window.keydown(function (event) {
    pointer =
      konami[pointer] === event.which
        ? pointer + 1
        : +(event.which === konami[0]);
    if (pointer === konami.length) {
      pointer = 0;
      poof();
    }
  });

  if (!onlyOnKonami) poof();
}
