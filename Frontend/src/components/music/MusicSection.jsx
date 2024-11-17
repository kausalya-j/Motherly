import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Pause, Play } from "lucide-react";
import "./MusicSection.css";
import gentlelullaby from "../../assets/gentle_lullaby.mp3";
import naturesounds from "../../assets/nature-sounds.mp3";
import mozart from "../../assets/classical-mozart.mp3";
import guided from "../../assets/guided-meditation.mpeg";
import om from "../../assets/om.mp3";
import beethoven from "../../assets/beethoven.mp3";
import womb from "../../assets/womb.mp3";

const musicData = {
  relaxation: [
    {
      title: "Gentle Lullaby",
      duration: "2:59",
      description: "Soft piano melody to reduce stress and anxiety",
      benefits: "Helps in reducing maternal stress and promotes better sleep",
      audioUrl: gentlelullaby,
    },
    {
      title: "Nature Sounds",
      duration: "4:21",
      description: "Peaceful sounds of rainfall and soft thunder",
      benefits: "Creates a calming environment for both mother and baby",
      audioUrl: naturesounds,
    },
    {
      title: "Classical Mozart",
      duration: "24:04",
      description: "Mozart's Sonata for Two Pianos in D major",
      benefits:
        "May enhance baby's brain development and reduce maternal anxiety",
      audioUrl: mozart,
    },
  ],
  meditation: [
    {
      title: "Prenatal Meditation",
      duration: "02:27",
      description: "Guided meditation with gentle background music",
      benefits: "Helps in connecting with your baby and reducing stress",
      audioUrl: guided,
    },
    {
      title: "Om Chanting",
      duration: "8:56",
      description: "Traditional Om chanting with peaceful music",
      benefits: "Promotes relaxation and spiritual connection",
      audioUrl: om,
    },
  ],
  developmental: [
    {
      title: "Classical Baby",
      duration: "10:47",
      description: "Beethoven's Symphony No. 6",
      benefits: "Stimulates baby's auditory development",
      audioUrl: beethoven,
    },
    {
      title: "Womb Sounds",
      duration: "1:53",
      description: "Recreated sounds of the womb with soft music",
      benefits: "Familiar sounds that comfort the baby",
      audioUrl: womb,
    },
  ],
};

const MusicSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("relaxation");
  const [playingTrack, setPlayingTrack] = useState(null);
  const [audio, setAudio] = useState(null);

  const handlePlay = (track) => {
    if (playingTrack === track) {
      // If the same track is clicked, pause it
      audio.pause();
      setPlayingTrack(null);
      setAudio(null);
    } else {
      // If audio is currently playing, stop it
      if (audio) {
        audio.pause();
      }

      // Create and play new audio
      const newAudio = new Audio(track.audioUrl);
      newAudio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });

      setAudio(newAudio);
      setPlayingTrack(track);

      // Add ended event listener
      newAudio.addEventListener("ended", () => {
        setPlayingTrack(null);
        setAudio(null);
      });
    }
  };

  return (
    <div className="music-section">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-pink-400 hover:text-pink-600 transition-colors"
        >
          <ArrowLeft className="mr-2" size={24} />
          Back
        </button>
      </div>

      <div className="music-header">
        <h1 className="text-3xl font-bold mb-2">Pregnancy Music Therapy</h1>
        <p className="text-gray-600">
          Music specially curated for expecting mothers and their babies
        </p>
      </div>

      <div className="category-buttons">
        {Object.keys(musicData).map((category) => (
          <button
            key={category}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} Music
          </button>
        ))}
      </div>

      <div className="music-list">
        {musicData[activeCategory].map((item, index) => (
          <div key={index} className="music-card">
            <div className="music-card-header">
              <h3>{item.title}</h3>
              <span className="duration">{item.duration}</span>
            </div>
            <p className="description">{item.description}</p>
            <div className="benefits">
              <h4>Benefits:</h4>
              <p>{item.benefits}</p>
            </div>
            <button
              className="play-btn flex items-center justify-center gap-2"
              onClick={() => handlePlay(item)}
            >
              {playingTrack === item ? (
                <>
                  <Pause size={20} /> Pause
                </>
              ) : (
                <>
                  <Play size={20} /> Play
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="music-tips">
        <h2>Tips for Musical Bonding</h2>
        <ul>
          <li>Listen to music for 15-30 minutes at a time</li>
          <li>Keep the volume at a moderate level</li>
          <li>Choose calming and melodious music</li>
          <li>Listen to music during your relaxation time</li>
          <li>Create a consistent music routine</li>
        </ul>
      </div>
    </div>
  );
};

export default MusicSection;
