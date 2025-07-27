export interface MealPlan {
  breakfast: string;
  lunch: string;
  dinner: string;
}

export interface WeeklyMealPlan {
  monday: MealPlan;
  tuesday: MealPlan;
  wednesday: MealPlan;
  thursday: MealPlan;
  friday: MealPlan;
  saturday: MealPlan;
  sunday: MealPlan;
}

export const weeklyMealPlan: WeeklyMealPlan = {
  monday: {
    breakfast: "Avena con plátano, nueces y semillas de chía",
    lunch: "Ensalada de lentejas con vegetales frescos y aceite de oliva",
    dinner: "Salmón al horno con brócoli y quinoa"
  },
  tuesday: {
    breakfast: "Tostada integral con aguacate y tomate cherry",
    lunch: "Bowl de quinoa con garbanzos, espinacas y tahini",
    dinner: "Pechuga de pollo a la plancha con verduras asadas"
  },
  wednesday: {
    breakfast: "Smoothie verde con espinacas, manzana y almendras",
    lunch: "Sopa de verduras con alubias blancas y pan integral",
    dinner: "Pescado blanco al vapor con calabacín y batata"
  },
  thursday: {
    breakfast: "Yogur natural con arándanos, granola casera y miel",
    lunch: "Ensalada mediterránea con atún, aceitunas y aceite de oliva",
    dinner: "Curry de verduras con arroz integral"
  },
  friday: {
    breakfast: "Tortilla de claras con verduras y pan integral",
    lunch: "Bowl de arroz integral con tofu, edamame y verduras",
    dinner: "Merluza a la plancha con espárragos y patata hervida"
  },
  saturday: {
    breakfast: "Porridge de avena con frutos rojos y nueces",
    lunch: "Gazpacho con pan integral y hummus de garbanzos",
    dinner: "Pavo al horno con calabaza asada y ensalada verde"
  },
  sunday: {
    breakfast: "Pan integral con ricotta, fresas y almendras laminadas",
    lunch: "Paella de verduras con arroz integral",
    dinner: "Bacalao al horno con pimientos y cebolla"
  }
};

export const healthTips = [
  "Bebe al menos 8 vasos de agua al día",
  "Incluye 5 porciones de frutas y verduras diarias",
  "Elige cereales integrales en lugar de refinados",
  "Limita el consumo de azúcares añadidos y bebidas azucaradas",
  "Consume pescado azul al menos 2 veces por semana",
  "Incluye frutos secos y semillas en tu dieta diaria",
  "Evita los alimentos ultraprocesados",
  "Cocina con aceite de oliva virgen extra",
  "Realiza al menos 30 minutos de ejercicio diario",
  "Mantén horarios regulares de comida"
];

export const daysOfWeek = [
  { key: 'monday', name: 'Lunes' },
  { key: 'tuesday', name: 'Martes' },
  { key: 'wednesday', name: 'Miércoles' },
  { key: 'thursday', name: 'Jueves' },
  { key: 'friday', name: 'Viernes' },
  { key: 'saturday', name: 'Sábado' },
  { key: 'sunday', name: 'Domingo' }
];