import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const platform = searchParams.get("platform");

  if (platform === "codechef") {
    try {
      const res = await fetch("https://www.codechef.com/users/meh_akshaya", {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        next: { revalidate: 1800 },
      });

      if (res.ok) {
        const html = await res.text();
        const ratingMatch = html.match(/rating-number">(\d+)/i) || html.match(/rating:\s*['"]?(\d+)/i);
        const highestRatingMatch = html.match(/Highest Rating\s*\(?(\d+)\)?/i);
        const globalRankMatch = html.match(/Global Rank:[\s\S]*?<strong>(\d+)<\/strong>/i) || html.match(/global_rank:\s*['"]?(\d+)/i);
        const countryRankMatch = html.match(/Country Rank:[\s\S]*?<strong>(\d+)<\/strong>/i) || html.match(/country_rank:\s*['"]?(\d+)/i);
        const contestsMatch = html.match(/No\. of Contests Participated:\s*<b>(\d+)<\/b>/i) || html.match(/contests:\s*(\d+)/i);

        const currentRating = ratingMatch ? parseInt(ratingMatch[1], 10) : 1194;
        const highestRating = highestRatingMatch ? parseInt(highestRatingMatch[1], 10) : 1194;

        // Calculate Division automatically
        let division = "Div 4";
        if (currentRating >= 2000) division = "Div 1";
        else if (currentRating >= 1600) division = "Div 2";
        else if (currentRating >= 1400) division = "Div 3";

        // Calculate Stars automatically
        let stars = "1★";
        if (currentRating >= 2500) stars = "7★";
        else if (currentRating >= 2200) stars = "6★";
        else if (currentRating >= 2000) stars = "5★";
        else if (currentRating >= 1800) stars = "4★";
        else if (currentRating >= 1600) stars = "3★";
        else if (currentRating >= 1400) stars = "2★";

        return NextResponse.json({
          name: "akshayaverma",
          handle: "meh_akshaya",
          rating: currentRating,
          highestRating: Math.max(highestRating, currentRating),
          division,
          stars,
          globalRank: globalRankMatch ? parseInt(globalRankMatch[1], 10) : 88381,
          countryRank: countryRankMatch ? parseInt(countryRankMatch[1], 84517) : 84517,
          contests: contestsMatch ? parseInt(contestsMatch[1], 10) : 16,
          institution: "Vellore Institute of Technology, Bhopal",
          profileUrl: "https://www.codechef.com/users/meh_akshaya",
        });
      }
    } catch {
      // Fallback
    }

    return NextResponse.json({
      name: "akshayaverma",
      handle: "meh_akshaya",
      rating: 1194,
      highestRating: 1194,
      division: "Div 4",
      stars: "1★",
      globalRank: 88381,
      countryRank: 84517,
      contests: 16,
      institution: "Vellore Institute of Technology, Bhopal",
      profileUrl: "https://www.codechef.com/users/meh_akshaya",
    });
  }

  return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
}
