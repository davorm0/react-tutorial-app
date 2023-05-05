import usePlatforms from "./usePlatforms";

const usePlatformLookup = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === platformId);

  return platform;
};

export default usePlatformLookup;
