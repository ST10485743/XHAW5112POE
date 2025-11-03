export type Course = {
  id: string;
  title: string;
  duration: string;
  fee: number;
  purpose: string;
  content: string;
  type: 'six-month' | 'six-week';
};

export const COURSES: Course[] = [
  { id: 'c1', 
    title: 'First Aid', 
    duration: '6 months', fee: 1500, 
    purpose: 'To provide first awareness and basic life support', content: [
      'Wounds and bleeding',
      'Burns and fractures',
      'Emergency scene management',
      'Cardio-Pulmonary Resuscitation (CPR)',
      'Respiratory distress e.g., choking, blocked airway',
    ],
    type: 'six-month' },

  { id: 'c2', 
    title: 'Sewing', 
    duration: '6 months', 
    fee: 1500, 
    purpose: 'To provide alterations and garment tailoring services.',
    content: [
      'Types of stitches',
      'Threading a sewing machine',
      'Sewing buttons, zips, hems and seams',
      'Alterations',
      'Designing and sewing new garments',
    ], 
    type: 'six-month' },

  { id: 'c3', 
    title: 'Landscaping', 
    duration: '6 months', 
    fee: 1500, 
    purpose: 'To provide landscaping services for new and established gardens.',
    content: [
      'Indigenous and exotic plants and trees',
      'Fixed structures (fountains, benches, tables, built-in braai)',
      'Balancing of plants and trees in garden',
      'Aesthetics of plant shapes and colours',
      'Garden layout',
    ], 
    type: 'six-month' },

  { id: 'c4', 
    title: 'Life Skills', 
    duration: '6 months', 
    fee: 1500, 
    purpose: 'To provide skills to navigate basic life necessities.',
    content: [
      'Opening a bank account',
      'Basic labour laws',
      'Basic reading and writing literacy',
      'Basic numeric literacy',
    ], 
    type: 'six-month' },

  { id: 's1', 
    title: 'Child Minding', 
    duration: '6 weeks', 
    fee: 750, 
    purpose: 'To provide basic child and baby care',
    content: [ 
      'Birth to six-month old baby needs',
      'Seven-month to one year old needs',
      'Toddler needs',
      'Educational toys',
    ], 
    type: 'six-week' },

  { id: 's2', 
    title: 'Cooking', 
    duration: '6 weeks', 
    fee: 750, 
    purpose: 'To prepare and cook nutritious family meals',
    content: [
      'Nutritional requirements for a healthy body',
      'Types of protein, carbohydrates and vegetables',
      'Planning meals',
      'Tasty and nutritious recipes',
      'Preparation and cooking of meals',
    ], 
    type: 'six-week' },

  { id: 's3', 
    title: 'Garden Maintenance', 
    duration: '6 weeks', 
    fee: 750, 
    purpose: 'To provide basic knowledge of watering, pruning and planting in a domestic garden',
    content: [
      'Water restrictions and the watering requirements of indigenous and exotic plants',
      'Pruning and propagation of plants',
      'Planting techniques for diffrent plant types',
    ], 
    type: 'six-week' },
];
