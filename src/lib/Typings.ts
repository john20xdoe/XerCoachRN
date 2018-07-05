
export enum SoundOption {
  Voice, // text to speech
  Sound // preset mp3 alert
}

export interface Exercise {
  key: string;
  title: string;
  // iconUrl?: string;
  duration: {
    seconds: number;
    backColor: string;
    startSoundURL?: string;
  };
  break: {
    seconds: number;
    backColor: string;
    startSoundURL?: string;
  };
  prepare: {
    seconds: number;
    backColor: string;
  };
  endSoundURL?: string;
  soundOption: SoundOption;
}

export interface UserExercise {
  exerciseKey: string;
  username: string;
  sequenceNumber: number;
  enabled: boolean;
  reps: number;
  dateAdded: number;
}

export interface UserExerciseHistory {
  username: string;
  exerciseKey: string;
  dateExercised: number;
  expectedRep: number;
  actualRep: number;
}
