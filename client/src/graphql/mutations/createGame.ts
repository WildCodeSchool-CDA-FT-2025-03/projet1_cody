import { gql } from "@apollo/client";

export const CREATE_GAME = gql`
  mutation CreateGame(
    $title: String!
    $subtitle: String
    $developers: String
    $publishers: String
    $release_date: String
    $isbn: String
    $format: String
    $duration_min: Float
    $duration_max: Float
    $summary: String
    $keywords: String
    $target_audience: String
    $original_language: String
    $series: Boolean
    $extract: String
    $game_modes: String
    $game_engine: String
    $pegi_esbr_rating: String
    $online_features: String
    $gameplay_mechanics: String
    $available_on: String
    $mod_support: String
    $image_url: String
    $image_alt: String
  ) {
    createGame(
      title: $title
      subtitle: $subtitle
      developers: $developers
      publishers: $publishers
      release_date: $release_date
      isbn: $isbn
      format: $format
      duration_min: $duration_min
      duration_max: $duration_max
      summary: $summary
      keywords: $keywords
      target_audience: $target_audience
      original_language: $original_language
      series: $series
      extract: $extract
      game_modes: $game_modes
      game_engine: $game_engine
      pegi_esbr_rating: $pegi_esbr_rating
      online_features: $online_features
      gameplay_mechanics: $gameplay_mechanics
      available_on: $available_on
      mod_support: $mod_support
      image_url: $image_url
      image_alt: $image_alt
    ) {
      id
      title
    }
  }
`;
