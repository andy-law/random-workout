const workouts = {
  push: [
    {title: 'Push ups', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Balance board push ups', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: ['balance-board']},
    {title: 'Side-to-side Moving push ups', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Pike push up', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Dumbell overhead press', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: ['dumbells']},
  ],
  pull: [
    {title: 'Dumbell rows', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: ['dumbells']},
    {title: 'Pull ups', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: ['pull-up-bar']},
    {title: 'Dumbell curls', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: ['dumbells']},
  ],
  hinge: [
    {title: 'Romanian deadlift', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: ['dumbells', 'barbells']},
    {title: 'Single leg dumbell deadlift', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: ['dumbells']},
  ],
  squat: [
    {
      title: 'Goblet squat', 
      instructions: 'Hold a kettlebell, dumbell or medicine ball up to you chest and squat baby', 
      video: 'https://www.youtube.com/watch?v=MxsFDhcyFyE',
      image: 'https://tonygentilcore.com/wp-content/uploads/2017/02/Goblet-squat.jpg', 
      link: 'https://www.verywellfit.com/how-to-goblet-squat-4589695', 
      equipment: ['kettle-bells', 'dumbells', 'medicine-ball']
    },
    {
      title: 'Jump squat', 
      instructions: 'Squat, then jump at the top. Pretty obvious really', 
      video: 'https://www.youtube.com/watch?v=DeTBwEL4m7s',
      image: 'https://3i133rqau023qjc1k3txdvr1-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/Squat-Jump_Exercise.jpg', 
      link: 'https://www.verywellfit.com/squat-jumps-build-agility-and-power-3120594', 
      equipment: []
    },
    {
      title: 'Pistol squats', 
      instructions: 'Lorem ipsum set dolor', 
      video: 'https://www.youtube.com/watch?v=qDcniqddTeE',
      image: 'https://static.wixstatic.com/media/ea6fdf_382d3f2386c94733a6a56a26dd80ff83~mv2.jpeg/v1/fit/w_480,h_399,al_c,q_80/file.png', 
      link: 'https://www.menshealth.com/fitness/a19530190/how-do-pistol-squat/', 
      equipment: []
    },
    {
      title: 'Bulgarian split squats', 
      instructions: 'Lorem ipsum set dolor', 
      video: 'https://www.youtube.com/watch?v=2C-uNgKwPLE&t=74s',
      image: 'https://gymjunkies.com/wp-content/uploads/2017/06/bodyweight_workout_1-2_bulgarian_split_squat-2.jpg', 
      link: 'https://www.menshealth.com/fitness/a19520134/the-worst-way-to-perform-the-bulgarian-split-squat/', 
      equipment: []
    },
    {
      title: 'Squat to knee raise', 
      instructions: 'Lorem ipsum set dolor', 
      video: 'https://www.youtube.com/watch?v=CVAElwNJXMI',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/squat-to-knee-raise-1570721748.jpg?crop=1xw:1xh;center,top&resize=480:*', 
      link: 'http://www.keepkeep.com/exercise/5a0a8cc50b510158f6ed538f?gender=f', 
      equipment: []
    },
  ],
  carry: [
    {
      title: 'Farmers carry', 
      instructions: 'Also called a farmers walk. Do with as heavy a weight as you can. Carry a dumbell/kettle bell in each hand and walk forward', 
      video: 'https://www.youtube.com/watch?v=rt17lmnaLSM', 
      image: 'https://i.ytimg.com/vi/p5MNNosenJc/maxresdefault.jpg', 
      link: 'https://www.crossfitinvictus.com/blog/farmer-carries-super-beneficial-yet-widely-underused/', 
      equipment: ['kettle-bells', 'dumbells']
    },
    {
      title: 'Suitcase carry', 
      instructions: 'Walk with a dumbell or kettle bell in one hand by your side, keeping as upright as possible.', 
      video: 'https://www.youtube.com/watch?v=V97zH30eO1g', 
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/suitcasecarry-1457044898.gif', 
      link: 'http://ageless-fitness.com/2013/10/21/exercises-suitcase-carry/', 
      equipment: ['kettle-bells', 'dumbells']
    },
    {
      title: 'Kettlebell rack carry', 
      instructions: 'Hold one or two kettlebells just underneath chin and walk', 
      video: 'https://www.youtube.com/watch?v=8PCziOj35ms', 
      image: 'https://i.pinimg.com/originals/95/28/53/95285331b38d358ed63c9fcd1001451b.jpg', 
      link: 'http://sevenstarsfitness.com/2015/04/kettlebell-rack-carries-for-quality-fitness/', 
      equipment: ['kettle-bells']},
    {
   
      title: 'Bottom-Up Kettlebell Waiter Carry', 
      instructions: 'Carry one kettlebell with the bottom of the bell facing upward with the handle centered in your palm', 
      video: 'https://www.youtube.com/watch?v=2YEYspisMVM', 
      image: 'https://acewebcontent.azureedge.net/exercise-library/large/390-1.jpg', 
      link: 'https://www.whitelionathletics.com/blogs/news/the-best-kettlebell-training-that-you-are-not-doing', 
      equipment: ['kettle-bells']},
  ],
  lunge: [
    {
      title: 'Reverse lunge', 
      instructions: 'Lorem ipsum set dolor', 
      video: 'https://www.youtube.com/watch?v=7pwO2gemRyg',
      image: 'https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/_main_reverselunge_0.jpg', 
      link: 'https://www.muscleandfitness.com/training/workout-routines/reverse-lunge', 
      equipment: []
    },
    {
      title: 'Walking lunge', 
      instructions: 'Lorem ipsum set dolor', 
      video: 'https://www.youtube.com/watch?v=L8fvypPrzzs',
      image: 'https://i.ytimg.com/vi/DlhojghkaQ0/maxresdefault.jpg', 
      link: 'https://www.coachmag.co.uk/bodyweight-exercises/6349/how-to-do-walking-lunges', 
      equipment: []
    },
    {
      title: 'Lunge to knee drive', 
      instructions: 'Lorem ipsum set dolor', 
      video: 'https://www.youtube.com/watch?v=4_1V0NRv7Ww',
      image: 'https://fitnationmag.com/wp-content/uploads/2016/01/Fatima_workout_lunge_knee_lift_web-1.jpg.jpg', 
      link: 'https://www.menshealth.com/fitness/a20695229/backward-lunge-with-knee-raise/', 
      equipment: []
    },
    {
      title: 'Lateral jumps', 
      instructions: 'Lorem ipsum set dolor', 
      video: 'https://www.youtube.com/watch?v=wPZP8Bwxplo',
      image: 'https://hips.hearstapps.com/assets.runnersworld.co.uk/i/15114/LateralJumps.jpg?resize=480:*', 
      link: 'https://www.runnersworld.com/uk/training/a775114/6-power-exercises-to-help-you-pick-up-the-pace/', 
      equipment: []
    },
    {
      title: 'Side lunge',
      instructions: 'Lorem ipsum set dolor', 
      video: 'https://www.youtube.com/watch?v=koOIMPoa9SE',
      image: 'https://i.pinimg.com/originals/aa/92/3d/aa923d7e6fa26a640f8c80998864ac27.jpg', 
      link: 'https://www.shape.com/fitness/tips/how-perform-side-lunge-lateral-lunge-leg-workout', 
      equipment: []
    }
  ],
  plank: [
    {title: 'Forearm plank', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Standard plank (high plank)', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Press up to elbows', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Side plank', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
  ],
};

export const getWorkouts = (availableEquipment) => {
  return Object.keys(workouts)
    .map((key) => {
      const workoutList = workouts[key];
      const availableWorkouts = workoutList
        .filter(({equipment}) => equipment.length === 0 || equipment.filter((type) => availableEquipment.includes(type)).length)
      
      const index = Math.floor(Math.random() * availableWorkouts.length);

      return {
        title: `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`,
        workout: availableWorkouts[index],
      };
    });
};