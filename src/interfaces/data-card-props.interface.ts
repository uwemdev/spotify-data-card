import Track from './track.interface';
import Artist from './artist.interface';
import StringMap from './map.interface';

export default interface DataCardProps {
  userDisplayName: string;
  nowPlaying: Track | null;
  topTracks: Track[];
  topArtists: Artist[];
  imageDataMap: StringMap;
  showNowPlaying: boolean;
  showTopTracks: boolean;
  showTopArtists: boolean;
  showTitle: boolean;
  customTitle?: string;
  errorMessage?: string;
}
