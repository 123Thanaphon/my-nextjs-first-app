import "./globals.css";
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="font-sans">
				<TheNavbar />
					<main className="min-h-screen">{children}</main>
				<TheFooter />
			</body>
		</html>
	);
}
