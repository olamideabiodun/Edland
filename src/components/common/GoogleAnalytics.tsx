import Script from "next/script";

type GoogleAnalyticsProps = {
	gaId?: string;
};

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
	const measurementId = gaId || process.env.NEXT_PUBLIC_GA_ID;

	if (!measurementId) return null;

	return (
 		<>
 			<Script
 				strategy="afterInteractive"
 				src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
 				async
 			/>
 			<Script id="ga-init" strategy="afterInteractive">
 				{`
 					window.dataLayer = window.dataLayer || [];
 					function gtag(){dataLayer.push(arguments);} 
 					gtag('js', new Date());
 					gtag('config', '${measurementId}');
 				`}
 			</Script>
 		</>
 	);
}


