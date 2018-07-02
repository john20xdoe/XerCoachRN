
export enum SoundOption {
  Voice, // text to speech
  Sound // preset mp3 alert
}

export interface Exercise {
  key: string;
  title: string;
  iconUrl: string;
  duration: {
    seconds: number;
    backColor: string;
    startSoundURL?: string;
  };
  break: {
    seconds: number;
    backColor: string;
    startSoundURL?: string;
  },
  prepare: {
    seconds: number;
    backColor: string;
  }
  reps: {
    count: number;
    endSoundURL: string;
  }
  soundOption: SoundOption;
}

export interface UserExercises {
  exerciseKey: string;
  sequenceNumber: number;
  enabled: boolean;
  dateAdded: number;
}

export interface UserSet {
  exerciseKey: string;
  dateExercised: number;
  username: string;
  expectedRep: number;
  actualRep: number;
}
