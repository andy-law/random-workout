import { getEquipment } from './equipment';

export const getWorkoutEquipment = ({equipment}) => {
  const allEquipment = getEquipment();

  return equipment.length
    ? equipment.map((item) => allEquipment.find(({value}) => value === item).label).join(', ')
    : 'None'
}

export const getExercisesEquipment = (exercises = []) => {
  return exercises
    .map(({workout}) => workout.equipment.reduce((acc, curr) => (!!acc ? `${acc}/${curr}` : curr), ''))
    .filter((equipment) => !!equipment);
};
