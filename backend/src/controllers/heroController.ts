import Hero from "../models/Hero";

export const getHero = async (req:any, res:any) => {
  try {
    const hero = await Hero.findOne();
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hero data" });
  }
};