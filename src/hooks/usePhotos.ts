import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import Photo from "../models/photo";

const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axios
      .get<Photo[]>("https://jsonplaceholder.typicode.com/photos", {
        signal: controller.signal,
      })
      .then((response) => {
        setPhotos([...response.data]);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { photos, error, isLoading, setPhotos, setError };
};

export default usePhotos;
