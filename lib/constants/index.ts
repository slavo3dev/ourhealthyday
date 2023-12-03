interface Categories {
    name: string;
    color: string;
}

export const CATEGORIES: Categories[] = [
	"Mushroom_Supplemets",
	"Mushroom_Psychedelics",
	"Mushroom_World",
	"Mental_Health",
	"Habit_Development",
	"Brain_Food",
	"Science",
	"Strength",
	"Endurance",
	"Anxiety",
	"Workout",
	"News"
].map(name => ({ name, color: "#ffffff" }));