/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  generateBuildId: () => "class_build_deploy",
};
// exportPathMap:"" 으로 페이지를 제외 시키면 서버 사이드 렌더링 되는 요소를 out폴더에 포함되지 않게 막을수 있다.
export default nextConfig;
