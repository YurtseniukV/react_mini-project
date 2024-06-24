import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loadUserProfile } from "../redux/slices/userSlice";
import classes from "../assets/css/Header.module.css";

const UserInfoComponent = () => {
    const dispatch = useAppDispatch();
    const { profile, loading, error } = useAppSelector(state => state.userSlice);

    useEffect(() => {
        if (!profile) {
            dispatch(loadUserProfile());
        }
    }, [dispatch, profile]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={classes.userInfo}>
            {profile ? (
                <div>{profile.username}</div>
            ) : (
                <span>You aren`t log in.</span>
            )}
        </div>
    );
};

export default UserInfoComponent;
