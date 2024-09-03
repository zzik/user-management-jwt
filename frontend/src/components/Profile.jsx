import  { useEffect, useState } from "react";
import { fetchProfile } from "../services/userService";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const profileData = await fetchProfile();
        setProfile(profileData); // Update state with profile data
      } catch (err) {
        setError(err.message);
      }
    };
    
    getProfile();
  }, []);
  
  
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>Loading...</div>;
  
  // console.log(profile)
  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Email: {profile.email}</p>
      {/* Add more profile details as needed */}
    </div>
  );
};

export default Profile;
