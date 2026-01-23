import { useEffect, useState } from "react";

type LanguageStat = {
  name: string;
  percent: number;
  text: string;
};

type StatsData = {
  human_readable_total: string;
  languages: LanguageStat[];
};

const CodingStats = () => {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://hackatime.hackclub.com/api/v1/users/SPJ27/stats")
      .then(res => res.json())
      .then(json => {
        setStats(json.data);
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return "unable to fetch";
  }

  if (!stats) {
    return "loading...";
  }

  return (
    stats.human_readable_total
  );
};

export default CodingStats;
