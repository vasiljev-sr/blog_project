import { ProfileData } from 'features/editableProfileCard';
import { ValidateProfileError } from '../../types/profileData';

export const validateProfileData = (
  profile: ProfileData | undefined
): ValidateProfileError[] => {
  const errors: ValidateProfileError[] = [];
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { first_name, last_name, age, avatar } = profile;

  if (!first_name || !last_name) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!avatar) {
    errors.push(ValidateProfileError.INCORRECT_AVATAR);
  }

  return errors;
};
