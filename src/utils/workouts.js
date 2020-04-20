const workouts = {
  push: [
    {
      slug: 'push-ups',
      title: 'Push ups',
      instructions: 'It\'s a pushup, innit. Doesn\'t everyone know how to do that?! If not follow the link',
      videoId: '0pkjOk0EiAk',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/basic-pushup-0-1446644701.jpg',
      link: 'https://www.menshealth.com/fitness/a26752486/perfect-push-up/',
      equipment: []
    },
    {
      slug: 'indo-board-push-ups',
      title: 'Balance/indo board push ups',
      instructions: 'Helps with core strength by trying to keep upright, do push ups with your hands on the balance/indo board',
      videoId: 'tL_R29OOZjA',
      image: 'https://www.homegymexperts.co.uk/wp-content/uploads/2017/09/indo-board-2.jpg',
      link: 'http://blog.indoboard.com/2018/01/26/fit-friday-indo-board-push-ups/',
      equipment: ['balance-board', 'indo-board']},
    {
      slug: 'moving-push-ups',
      title: 'Side-to-side Moving push ups',
      instructions: 'Walk hands and feet to one side before doing a press up and then walk them back to the other side before doing another',
      videoId: 'yVLYzmmwEAo',
      image: 'https://i.ytimg.com/vi/yVLYzmmwEAo/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=yVLYzmmwEAo',
      equipment: []
    },
    {
      slug: 'pike-push-up',
      title: 'Pike push up',
      instructions: 'Place your hands on the ground shoulder width apart, with your bum in the air and feet on the ground, practitioners of Yoga may recognise this as the downward-facing dog position. Your arms should be overhead, slightly in-front of your face. Lower yourself under control, until the top of your head touches the ground. Hold for a second, then return to the start position.',
      videoId: 'x7_I5SUAd00',
      image: 'https://www.t-nation.com/system/publishing/article_assets/4285/original/Pike-Push-up.jpg?ts=1478633506',
      link: 'https://www.menshealth.com/fitness/a20694810/pike-pushup/',
      equipment: []
    },
    {
      slug: 'dumbell-overhead-press',
      title: 'Dumbell overhead press',
      instructions: 'Stand upright and keep the back straight. Hold a dumbbell in each hand at the shoulders with an overhand grip. Thumbs should be on the inside and knuckles facing up. Raise the weights above the head in a controlled motion while exhaling. Pause at the top of the motion. Return the dumbbells to the shoulders while inhaling.',
      videoId: 'B-aVuyhvLHU',
      image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2017/01/dumbbell-overhead-press.jpg?itok=4nUAYf1G&timestamp=1484316073',
      link: 'https://www.verywellfit.com/how-to-do-the-dumbbell-overhead-press-3498298',
      equipment: ['dumbells']
    },
    {
      slug: 'exercise-ball-chest',
      title: 'Chest presses on exercise ball',
      instructions: 'Lie on a ball or bench with the head and neck supported. Begin with the weights straight up over chest. Bend the elbows and lower arms no lower than shoulders, wrists straight. Lift back to start and repeat.',
      videoId: 'biX0qu4teJk',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/swiss-ball-db-bench-press-1446564601.jpg?resize=480:*',
      link: 'https://www.womenshealthmag.com/fitness/a20697461/stability-ball-chest-press/',
      equipment: ['exercise-ball', 'dumbells']
    }
  ],
  pull: [
    {
      slug: 'dumbell-rows',
      title: 'Dumbell rows',
      instructions: 'Stand with feet shoulder-width apart and hold a dumbbell in each hand. Bend the knees slightly and bend over at the waist with your back straight. Let dumbbells hang in front of the body with arms fully extended.',
      videoId: 'LktGPg-AkvY',
      image: 'https://cdn.muscleandstrength.com/sites/default/files/bent-over-dumbbell-row-1.jpg',
      link: 'https://www.msn.com/en-us/health/exercise/strength/dumbbell-row/ss-BBtOh8f',
      equipment: ['dumbells']
    },
    {
      slug: 'pull-ups',
      title: 'Pull ups',
      instructions: 'Leap up and grip the bar with your hands shoulder width apart and your palms facing away from you. Hang with your arms fully extended, you can bend your legs at the knee if they’re dragging on the ground. Keep your shoulders back and your core engaged throughout. Then pull up. Focus on enlisting every upper body muscle to aid your upward endeavours. Move slowly upward until your chin is above the bar, then equally slowly downward until your arms are extended again.',
      videoId: 'jFmCrA6fo78',
      image: 'https://www.climbing.com/.image/t_share/MTM3MzI0NDMzMjY5MzM1MjA5/trainingperfectpullupsjpg.jpg',
      link: 'https://www.coachmag.co.uk/exercises/full-body-workouts/2534/10-pull-variations',
      equipment: ['pull-up-bar']
    },
    {
      slug: 'dumbell-curls',
      title: 'Dumbell curls',
      instructions: 'Stand holding a dumbbell in each hand with your arms hanging by your sides. Ensure your elbows are close to your torso and your palms facing forward. Keeping your upper arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps.',
      videoId: 'ykJmrZ5v0Oo',
      image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2016/04/dumbbells-countdown-home-workout-biceps-curl.jpg?itok=CO8-Clp0&timestamp=1460984825',
      link: 'https://www.menshealth.com/uk/building-muscle/a748583/dumbbell-bicep-curls/',
      equipment: ['dumbells']
    },
  ],
  hinge: [
    {
      slug: 'romanian-deadlift',
      title: 'Romanian deadlift',
      instructions: 'To start the move, stand with the bar or weight in your hands as opposed to the floor. Slowly lower the weight with a slight bend in your knees, bending at the hips and keeping your back straight. Lower until you feel a slight stretch in your hamstrings – usually when the weight has just passed your knees – then drive your hips forwards and use your hamstrings to power back up to standing.',
      videoId: 'GZAKFRNtxLY',
      image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2017/07/romanian-deadlift.jpg?itok=9brNOGSc&timestamp=1500891747',
      link: 'https://www.coachmag.co.uk/exercises/leg-exercises/3720/romanian-deadlifts-unlock-your-leg-muscles',
      equipment: ['dumbells', 'barbells']
    },
    {
      slug: 'single-leg-deadlift',
      title: 'Single leg deadlift',
      instructions: 'Begin standing with your feet hip-width apart and parallel. Hold a kettlebell, a barbell or two dumbbells in your hands down in front of you. Lean forward in your hips, shifting your weight onto one leg while your other leg engages and starts to extend straight behind you. Lift your extended leg and pitch your body forward until your body forms a “T” shape. Your arms should be hanging straight down, holding onto the weight. Keep a slight bend in your standing leg. Slowly bring in your extended leg and return to starting position. Repeat with the other leg.',
      videoId: 'b9bHy3ojQWA',
      image: 'https://media1.popsugar-assets.com/files/thumbor/j5gPVlYiDQr9IBsZyaspkXD7aLc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/02/27/927/n/1922729/b9021e726b062c8f_kettlebell-photo/i/Single-Leg-Deadlift-Kettlebell.jpg',
      link: 'https://classpass.com/movements/single-leg-deadlift',
      equipment: ['dumbells', 'kettle-bells']
    },
    {
      slug: 'ball-hip-hinge',
      title: 'Medicine ball hip hinge',
      instructions: 'Start with your legs about hip width apart and your knees slightly bent. Hold the medicine ball to the chest and hinge from the hip keeping a straight back, until you feel a stretch in the hamstrings.',
      videoId: '2Du84N6D0GQ',
      image: 'https://i.pinimg.com/originals/ed/65/b2/ed65b2e92ef83797ea825424fbeeac04.jpg',
      link: 'https://protips.dickssportinggoods.com/sports-and-activities/exercise-and-fitness/strength-training-techniques-what-is-the-hip-hinge-pattern',
      equipment: ['medicine-ball']
    },
    {
      slug: 'hip-thrust',
      title: 'Hip thrust',
      instructions: 'Start in a seated position with your knees and feet flat on the floor and with your shoulder blades against a bench. Squeeze your glutes and core and lift hips up until your back is parallel to the floor, explains Gallucci. Hold for three seconds at the top, then lower back down to the start.',
      videoId: 'CJC4Qn2AAHo',
      image: 'https://yurielkaim.com/wp-content/uploads/2016/11/Barbell-Hip-Thrust.jpg',
      link: 'https://www.shape.com/fitness/tips/glute-bridge-vs-hip-thrust',
      equipment: []
    },
    {
      slug: 'glute-bridge',
      title: 'Glute bridge',
      instructions: 'Lie face up on the floor, with your knees bent and feet flat on the ground. Keep your arms at your side with your palms down. Lift your hips off the ground until your knees, hips and shoulders form a straight line. Squeeze those glutes hard and keep your abs drawn in so you don’t overextend your back during the exercise. Hold your bridged position for a couple of seconds before easing back down.',
      videoId: '_leI4qFfPVw',
      image: 'https://fitnessmedia.azureedge.net/media/3948/glute-bridge-a-b-1920-x-1080-compressed.jpg',
      link: 'https://www.coachmag.co.uk/glute-exercises/2333/glute-bridge-how-to-do-it-benefits-and-variations',
      equipment: []
    }
  ],
  squat: [
    {
      slug: 'goblet-squat',
      title: 'Goblet squat',
      instructions: 'Hold a kettlebell, dumbell or medicine ball up to you chest and squat baby',
      videoId: 'MxsFDhcyFyE',
      image: 'https://tonygentilcore.com/wp-content/uploads/2017/02/Goblet-squat.jpg',
      link: 'https://www.verywellfit.com/how-to-goblet-squat-4589695',
      equipment: ['kettle-bells', 'dumbells', 'medicine-ball']
    },
    {
      slug: 'jump-squat',
      title: 'Jump squat',
      instructions: 'Squat, then jump at the top. Pretty obvious really',
      videoId: 'DeTBwEL4m7s',
      image: 'https://3i133rqau023qjc1k3txdvr1-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/Squat-Jump_Exercise.jpg',
      link: 'https://www.verywellfit.com/squat-jumps-build-agility-and-power-3120594',
      equipment: []
    },
    {
      slug: 'pistol-squats',
      title: 'Pistol squats',
      instructions: 'Start by standing on one leg, with the toes pointed forward and/or slightly turned out. With the front leg flexed and the foot pointed in front of you, active the core and hip flexors to prime the movement. With the weight distributed in the foot that in on the ground, slowly sit down into a squat, making sure that the torso has a slight forward lean (similar to the back squat). As you descend deeper into the pistol squat, it is highly recommended to not “catch the bounce” aggressively out of this movement unless you are highly trained. Once you have assumed a deep squat position, use your single leg strength to press towards into the floor, locking the core tight to allow to maximal effort.',
      videoId: 'qDcniqddTeE',
      image: 'https://static.wixstatic.com/media/ea6fdf_382d3f2386c94733a6a56a26dd80ff83~mv2.jpeg/v1/fit/w_480,h_399,al_c,q_80/file.png',
      link: 'https://www.menshealth.com/fitness/a19530190/how-do-pistol-squat/',
      equipment: []
    },
    {
      slug: 'bulgarian-split-squats',
      title: 'Bulgarian split squats',
      instructions: 'Stand facing away from the bench, holding a barbell across your upper back. Have one leg resting on the bench behind you, laces down. Squat with your standing leg until the knee of your trailing leg almost touches the floor. Push up through your front foot to return to the start position.',
      videoId: '2C-uNgKwPLE',
      image: 'https://gymjunkies.com/wp-content/uploads/2017/06/bodyweight_workout_1-2_bulgarian_split_squat-2.jpg',
      link: 'https://www.menshealth.com/fitness/a19520134/the-worst-way-to-perform-the-bulgarian-split-squat/',
      equipment: []
    },
    {
      slug: 'squat-to-knee-raise',
      title: 'Squat to knee raise',
      instructions: 'Perform a standard squat, but when coming back to standing alternate legs that drive up.',
      videoId: 'CVAElwNJXMI',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/squat-to-knee-raise-1570721748.jpg?crop=1xw:1xh;center,top&resize=480:*',
      link: 'http://www.keepkeep.com/exercise/5a0a8cc50b510158f6ed538f?gender=f',
      equipment: []
    },
  ],
  carry: [
    {
      slug: 'farmers-carry',
      title: 'Farmers carry',
      instructions: 'Also called a farmers walk. Do with as heavy a weight as you can. Carry a dumbell/kettle bell in each hand and walk forward',
      videoId: 'rt17lmnaLSM',
      image: 'https://i.ytimg.com/vi/p5MNNosenJc/maxresdefault.jpg',
      link: 'https://www.crossfitinvictus.com/blog/farmer-carries-super-beneficial-yet-widely-underused/',
      equipment: ['kettle-bells', 'dumbells']
    },
    {
      slug: 'suitcase-carry',
      title: 'Suitcase carry',
      instructions: 'Walk with a dumbell or kettle bell in one hand by your side, keeping as upright as possible.',
      videoId: 'V97zH30eO1g',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/suitcasecarry-1457044898.gif',
      link: 'http://ageless-fitness.com/2013/10/21/exercises-suitcase-carry/',
      equipment: ['kettle-bells', 'dumbells']
    },
    {
      slug: 'kettlebell-rack-carry',
      title: 'Kettlebell rack carry',
      instructions: 'Hold one or two kettlebells just underneath chin and walk',
      videoId: '8PCziOj35ms',
      image: 'https://i.pinimg.com/originals/95/28/53/95285331b38d358ed63c9fcd1001451b.jpg',
      link: 'http://sevenstarsfitness.com/2015/04/kettlebell-rack-carries-for-quality-fitness/',
      equipment: ['kettle-bells'],
    },
    {
      slug: 'bottom-up-waiter-carry',
      title: 'Bottom-Up Kettlebell Waiter Carry',
      instructions: 'Carry one kettlebell with the bottom of the bell facing upward with the handle centered in your palm',
      videoId: '2YEYspisMVM',
      image: 'https://acewebcontent.azureedge.net/exercise-library/large/390-1.jpg',
      link: 'https://www.whitelionathletics.com/blogs/news/the-best-kettlebell-training-that-you-are-not-doing',
      equipment: ['kettle-bells']
    },
  ],
  lunge: [
    {
      slug: 'reverse-lunge',
      title: 'Reverse lunge',
      instructions: 'Stand upright, with your hands at your hips. Take a large step backward with your left foot. Lower your hips so that your right thigh (front leg) becomes parallel to the floor with your right knee positioned directly over your ankle. Return to standing by pressing your right heel into the floor and bringing your left leg forward to complete one rep. Alternate legs',
      videoId: '7pwO2gemRyg',
      image: 'https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/_main_reverselunge_0.jpg',
      link: 'https://www.muscleandfitness.com/training/workout-routines/reverse-lunge',
      equipment: []
    },
    {
      slug: 'walking-lunge',
      title: 'Walking lunge',
      instructions: 'Stand upright, feet together, and take a controlled step forward with your right leg, lowering your hips toward the floor by bending both knees to 90-degree angles. The back knee should point toward but not touch the ground, and your front knee should be directly over the ankle.',
      videoId: 'L8fvypPrzzs',
      image: 'https://i.ytimg.com/vi/DlhojghkaQ0/maxresdefault.jpg',
      link: 'https://www.coachmag.co.uk/bodyweight-exercises/6349/how-to-do-walking-lunges',
      equipment: []
    },
    {
      slug: 'lunge-to-knee-drive',
      title: 'Lunge to knee drive',
      instructions: 'Stand upright, feet together, and take a controlled step forward with your right leg, lowering your hips toward the floor by bending both knees to 90-degree angles. The back knee should point toward but not touch the ground, and your front knee should be directly over the ankle. As you return to standing drive the non standing knee upwards.',
      videoId: '4_1V0NRv7Ww',
      image: 'https://fitnationmag.com/wp-content/uploads/2016/01/Fatima_workout_lunge_knee_lift_web-1.jpg.jpg',
      link: 'https://www.menshealth.com/fitness/a20695229/backward-lunge-with-knee-raise/',
      equipment: []
    },
    {
      slug: 'lateral-jumps',
      title: 'Lateral jumps',
      instructions: 'Start standing with your legs hip-width apart, with hips and knees slightly bent. Shift your weight onto left leg and pick your right foot up from the ground. Bend your left (standing) knee to lower your hips a few inches, then push explosively off your standing left foot to jump to the right side landing on your right leg. Bring your left leg towards your right ankle without it touching the floor. Repeat to the other side; you should jump as far as possible so that when you land, you immediately take off again to the other side. Increase your range of motion by touching the floor with your hand every rep. The deeper you go, the more you’ll activate your hip muscles',
      videoId: 'wPZP8Bwxplo',
      image: 'https://hips.hearstapps.com/assets.runnersworld.co.uk/i/15114/LateralJumps.jpg?resize=480:*',
      link: 'https://www.runnersworld.com/uk/training/a775114/6-power-exercises-to-help-you-pick-up-the-pace/',
      equipment: []
    },
    {
      slug: 'side-lunge',
      title: 'Side lunge',
      instructions: 'Start standing with legs slightly wider than shoulder-distance apart and toes pointed forward. Shift your body weight to one leg bending the knee until it reaches a 90-degree angle and the other leg is straight. Glutes are pressing back behind you. Return to center and switch sides.',
      videoId: 'koOIMPoa9SE',
      image: 'https://i.pinimg.com/originals/aa/92/3d/aa923d7e6fa26a640f8c80998864ac27.jpg',
      link: 'https://www.shape.com/fitness/tips/how-perform-side-lunge-lateral-lunge-leg-workout',
      equipment: []
    }
  ],
  plank: [
    {
      slug: 'forearm-plank',
      title: 'Forearm plank',
      instructions: 'Lie face down with your forearms on the floor and your elbows directly beneath your shoulders. Keep your feet flexed with the bottoms of your toes on the floor. Clasp your hands in front of your face, so your forearms make an inverted "V." Rise up on your toes so that only your forearms and toes touch the floor — your body should hover a few inches off the floor in a straight line from shoulders to feet.',
      videoId: 'pvIjsG5Svck',
      image: 'https://i.pinimg.com/originals/98/2a/45/982a457e895fb39171218d5e199c3bbe.jpg',
      link: 'https://classpass.com/movements/forearm-plank',
      equipment: []
    },
    {
      slug: 'high-plank',
      title: 'Standard plank (high plank)',
      instructions: 'Get into the pressup position and hold it. Stay strong!',
      videoId: 'B296mZDhrP4',
      image: 'https://images.shape.mdpcdn.com/sites/shape.com/files/styles/challenge_slide_half_width/public/800_day-3-extended-arm-plank.jpg',
      link: 'https://www.shape.com/fitness/videos/plank-benefits-best-abs-exercise',
      equipment: []
    },
    {
      slug: 'high-to-low-plank',
      title: 'High plank to low plank',
      instructions: 'Start in a high plank position so that your hands are right underneath your shoulders. Tighten your abs and glutes and make sure your body forms a straight line all the way from your head to your ankles. Now start by bending your right arm from the elbow and lowering it on the ground so that you can lean on your right forearm, then do the same with your left arm. So now you are on a low plank position. Try to make sure that your body forms a straight line from your head to your ankles. Then push your body up with the right arm and then with the left arm to finish on a high plank position again.',
      videoId: 'kJp-8Me6_84',
      image: 'https://media1.popsugar-assets.com/files/thumbor/ZeV-NYnJKYWRHkHIB8bk2E-QQU0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/19/537/n/44223267/794d103807eaa3b0_Up-Down-Plank/i/High-Low-Plank.jpg',
      link: 'http://traininghomeandaway.com/high-to-low-plank/',
      equipment: []
    },
    {
      slug: 'side-plank',
      title: 'Side plank',
      instructions: 'Lie on your right side, legs extended and stacked from hip to feet. The elbow of your right arm is directly under your shoulder. Ensure your head is directly in line with your spine. Your left arm can be aligned along the left side of your body. Engage your abdominal muscles, drawing your navel toward your spine. Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position. After several breaths, inhale and return to the starting position. The goal should be to hold for 60 seconds. Change sides and repeat.',
      videoId: 'IkMmABQ9SkM',
      image: 'https://i0.wp.com/www.runsociety.com/wp-content/uploads/2014/06/sideplank-thumb.jpg?fit=1280%2C720&ssl=1',
      link: 'https://www.coachmag.co.uk/abs-workouts-and-exercises/6340/side-plank-the-best-abs-move-you-re-probably-not-doing',
      equipment: []
    },
    {
      slug: 'medecine-ball-plank',
      title: 'Medicine ball plank',
      instructions: 'Begin kneeling on the floor with hands cupped around medicine ball. Tighten abdominals and glutes and stretch your legs behind you to a straight line. Straighten arms but keep shoulders down away from ears. Breathe and hold your body in a straight line. Avoid sagging through the low back.',
      videoId: 'l_m9jxIONw8',
      image: 'https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2019/05/MedicineBallPlank.png?w=1155&h=789',
      link: 'https://gethealthyu.com/exercise/medicine-ball-plank/',
      equipment: ['medicine-ball']
    },
    {
      slug: 'ball-plank-pass',
      title: 'Medicine ball plank pass',
      instructions: 'Roll medicine ball from hand to hand whilst in plank position.',
      videoId: 'Fqu_QoSbdiI',
      image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/images/dir_25/mens_fitness_12904.jpg?itok=LgjNVDM6&timestamp=1369282187',
      link: 'https://www.health.harvard.edu/staying-healthy/plank-pass',
      equipment: ['medicine-ball']
    },
    {
      slug: 'plank-shoulder-touch',
      title: 'Plank with shoulder touch',
      instructions: 'Start in a standard plank position. Reach your right hand to touch your left shoulder. Put it back down and repeat with left hand tapping right shoulder.',
      videoId: 'QOCn3_iOAro',
      image: 'https://www.top.me/wp-content/uploads/2014/11/Plank-with-Shoulder-Touches.jpg',
      link: 'https://www.muscleandfitness.com/workouts/chest-exercises/videos/straight-arm-plank-shoulder-touch',
      equipment: []
    },
    {
      slug: 'indo-forearm-plank',
      title: 'Indo board forearm plank',
      instructions: 'Hold a forearm plank on the indo board',
      videoId: 'J23rOTDsWUk',
      image: 'https://i.ytimg.com/vi/J23rOTDsWUk/maxresdefault.jpg',
      link: 'http://blog.indoboard.com/2018/03/07/workout-wednesday-indo-board-plank/',
      equipment: []
    }
  ],
};

export const getWorkouts = (availableEquipment) => {
  return Object.keys(workouts)
    .map((key) => {
      const workoutList = workouts[key] || [];
      const availableWorkouts = workoutList
        .filter(({equipment}) => equipment.length === 0 || equipment.filter((type) => availableEquipment.includes(type)).length)

      const index = Math.floor(Math.random() * availableWorkouts.length);

      return {
        title: `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`,
        workout: availableWorkouts[index],
      };
    });
};
