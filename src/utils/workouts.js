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
    {title: 'Goblet squat', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: ['kettle-bells', 'dumbells', 'medecine-ball']},
    {title: 'Jump squat', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Side to side lunge', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: '1 legged squats', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Lumberjack squats', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Squat to knee raise', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
  ],
  carry: [
    {title: 'Farmers carry', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: ['kettle-bells', 'dumbells']},
  ],
  lunge: [
    {title: 'Reverse lunge', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Walking lunge', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Lunge to knee drive', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
    {title: 'Lateral jumps', instructions: 'Lorem ipsum set dolor', image: '', link: '', equipment: []},
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