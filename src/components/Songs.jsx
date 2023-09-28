import React from "react";

const SongList = ({ songs }) => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16 px-2 bg-gradient-to-r from-sky-800 to-sky-950">
      {songs.length > 0 &&
        songs.map((song) => (
          <div
            className="bg-gradient-to-r from-sky-800 to-sky-950 font-mono p-2 shadow shadow-yellow-50 rounded-lg mx-auto leading-8"
            key={song.id}
          >
               <img
          className="rounded"
          src={song.album.images[0].url}
          alt="Album Cover"
        />
        <p>
          <strong>Song Name:</strong> {song.name}
        </p>
        <p>
          <strong>Album:</strong> {song.album.name}
        </p>
        <p>
          <strong>Artist:</strong>{" "}
          {song.artists.map((artist) => artist.name).join(", ")}
        </p>
        <p>
          <strong>Popularity:</strong> {song.popularity}
        </p>
        {song.preview_url && (
          <audio controls className="mx-auto mt-auto py-2">
            <source src={song.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
          </div>
        ))}
    </div>
  );
};

export default SongList;
