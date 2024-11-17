// src/components/food/FoodSection.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FoodSection.css";

const DietChart = ({ day, meals }) => (
  <div className="diet-chart">
    <h3>{day}</h3>
    <div className="meals">
      {Object.entries(meals).map(([time, meal]) => (
        <div key={time} className="meal-item">
          <h4>{time}</h4>
          <p>{meal}</p>
        </div>
      ))}
    </div>
  </div>
);

const FoodSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const dietData = {
    Sunday: {
      "Breakfast (8:00-8:30AM)":
        "Chapathi-4+ Egg roast ½ cup(1 egg)/ Ragi Dosa-3+ Tomato + onion chutney ½ cup",
      "Mid-Meal (11:00-11:30AM)":
        "Avocado(75gms)/ nuts (almonds-4, raisins-6 walnuts-3) milkshake, {Milk-150ml}",
      "Lunch (2:00-2:30PM)":
        "1.5 cup brown rice + ½ cup sambhar + Grilled chicken (150 gm)+100 gms curd",
      "Evening (4:00-4:30PM)": "Lentil sprouts 1 cup",
      "Dinner (8:00-8:30PM)": "3 Roti / chappati + Tomato subji 1/2 cup",
    },

    Monday: {
      "Breakfast (8:00-8:30AM)":
        "Upma-1.5 cup/ poha-1.5 cup + coconut chutney/tomato chutney/green chutney-2tsp",
      "Mid-Meal (11:00-11:30AM)": "1 Portion fruit salad + Cottage cheese",
      "Lunch (2:00-2:30PM)":
        "1.5 cup rice + 1/2 cup Dhal + Palak subji 1/2 cup + 1/2 cup curd",
      "Evening (4:00-4:30PM)": "Channa chat 1 cup + 1 cup light tea",
      "Dinner (8:00-8:30PM)": "3 roti/ Chapathi + Ladies finger subji 1/2 cup",
    },

    Tuesday: {
      "Breakfast (8:00-8:30AM)":
        "Idli-4/ medium dosa-3-sambhar(1 cup) + 1tsp tomato chutney",
      "Mid-Meal (11:00-11:30AM)": "green gram sprouts 1 cup",
      "Lunch (2:00-2:30PM)":
        "Veg pulav rice 1.5 cup + 1 cup Soya Chunk curry + 1/2 cup curd",
      "Evening (4:00-4:30PM)": "Fruits salad 1 cup + 1/2 cup milk",
      "Dinner (8:00-8:30PM)":
        "Brocken wheat upma 1 cup + 1/2 cup green beans subji",
    },

    Wednesday: {
      "Breakfast (8:00-8:30AM)":
        "Moongdal chilla-3/+pudina/coconut chutney-2tsp/ Wheat dosa-4 + Tomato subji ½ cup",
      "Mid-Meal (11:00-11:30AM)": "Blue berry shake 1 cup",
      "Lunch (2:00-2:30PM)":
        "1.5 cup Mutton biryani. Cucumber onion Raita ½ cup",
      "Evening (4:00-4:30PM)":
        "Sweet potato salad (cooked sweet potato-200gm, chat masala-1 pinch, lemon juice-1 tsp) + Light tea /coffee 1 cup",
      "Dinner (8:00-8:30PM)": "Wheat dosa 3 + 1/2 cup Bitter guard subji",
    },

    Thursday: {
      "Breakfast (8:00-8:30AM)":
        "Hung curd cucumber sandwich(3 slices)-1/ oats(75gm)+milk-200ml",
      "Mid-Meal (11:00-11:30AM)": "Boilled black channa 1 cup",
      "Lunch (2:00-2:30PM)":
        "1/2 cup rice + 2 medium chappati + 1/2 cup Kidney beans curry + Snake guard subji 1/2 cup",
      "Evening (4:00-4:30PM)": "Fruits salad 1 cup + 1/2 cup milk",
      "Dinner (8:00-8:30PM)": "3 Roti/ chapati + 1/2 cup spinach subji",
    },

    Friday: {
      "Breakfast (8:00-8:30AM)":
        "Rice dosa-4 + 1/2 cup sambhar + Boiled egg-1/ broken wheat upma with vegetables-1.5 cup + Egg omelette (1 egg)",
      "Mid-Meal (11:00-11:30AM)": "1 Portion fruit salad + Cottage cheese",
      "Lunch (2:00-2:30PM)":
        "Tomato rice 1.5 cup + Soya chunk curry 1 cup + small cup curd",
      "Evening (4:00-4:30PM)": "1 cup tea + Brown rice flakes 1 cup + Jaggery",
      "Dinner (8:00-8:30PM)": "3 Roti / chappathi + Ridge guard subji 1/2 cup",
    },

    Saturday: {
      "Breakfast (8:00-8:30AM)": "Sprouts & Paneer Paratha 3 + Green chutney",
      "Mid-Meal (11:00-11:30AM)": "1 cup bana + almond milk shake",
      "Lunch (2:00-2:30PM)":
        "3 medium lachha parantha + ½ cup chana masala + cucumber and onion salad 1 cup",
      "Evening (4:00-4:30PM)":
        "Boilled balack channa 1 cup + light tea/ coffee 1 cup",
      "Dinner (8:00-8:30PM)":
        "Brocken wheat upma 1 cup + 1/2 cup green beans subji",
    },
  };

  const recommendedFoods = {
    Cereals: [
      "Brown rice",
      "Oat meal",
      "Broken wheat",
      "Ragi",
      "Quinoa",
      "Barley",
    ],
    Pulses: [
      "Chickpeas",
      "Kidney beans",
      "Moong dal",
      "Masoor dal",
      "Soybeans",
    ],
    Vegetables: [
      "Broccoli",
      "Kale",
      "Spinach",
      "Lettuce",
      "Beet",
      "Potatoes",
      "Carrots",
    ],
    Fruits: [
      "Avocado",
      "Banana",
      "Custard Apple",
      "Pears",
      "Grape",
      "Watermelon",
    ],
    "Milk Products": ["Milk", "Cottage Cheese", "Yogurt"],
    "Meat & Fish": ["Lean Meat", "Chicken Breast", "Tuna", "Salmon", "Tilapia"],
    Oils: ["Olive oil", "Mustard Oil", "Rice bran Oil", "Canola oil"],
    "Nuts & Seeds": [
      "Sunflower seeds",
      "Apricots",
      "Almonds",
      "Walnuts",
      "Pecans",
    ],
  };

  return (
    <div className="food-section">
      <nav className="food-nav">
        <Link to="/user" className="back-button">
          ← Back to Profile
        </Link>
        <h1>Pregnancy Nutrition Guide</h1>
      </nav>

      <div className="tab-buttons">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "diet" ? "active" : ""}
          onClick={() => setActiveTab("diet")}
        >
          Diet Chart
        </button>
        <button
          className={activeTab === "foods" ? "active" : ""}
          onClick={() => setActiveTab("foods")}
        >
          Recommended Foods
        </button>
      </div>

      <div className="content-section">
        {activeTab === "overview" && (
          <div className="overview">
            <h2>Nutrition During Pregnancy</h2>
            <p>
              Your body goes through numerous physical and hormonal changes
              during pregnancy. The way you nourish your body during this time
              will affect your health and your baby's.
            </p>

            <h3>Do's</h3>
            <ul>
              <li>Take enough water</li>
              <li>Include different colored fruits and vegetables</li>
              <li>Do workout</li>
              <li>Eat properly cooked foods</li>
              <li>Include different cereals and millets</li>
            </ul>

            <h3>Don'ts</h3>
            <ul>
              <li>Don't go for more than 2 to 3 hours without eating</li>
              <li>
                Don't eat for two (During pregnancy increase maximum 300-500
                kcal energy than normal)
              </li>
              <li>Don't over dose refined carbs</li>
            </ul>
          </div>
        )}

        {activeTab === "diet" && (
          <div className="diet-charts">
            {Object.entries(dietData).map(([day, meals]) => (
              <DietChart key={day} day={day} meals={meals} />
            ))}
          </div>
        )}

        {activeTab === "foods" && (
          <div className="recommended-foods">
            {Object.entries(recommendedFoods).map(([category, foods]) => (
              <div key={category} className="food-category">
                <h3>{category}</h3>
                <ul>
                  {foods.map((food) => (
                    <li key={food}>{food}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodSection;
