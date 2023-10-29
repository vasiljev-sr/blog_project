import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileData, ValidateProfileError } from '../../types/profileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from 'features/editableProfileCard/model/services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  ProfileData,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (profileId, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const formData = getProfileForm(getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put(`/profile/${formData?.id}`, formData);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
