import Post from "../../componants/posts/Post";
import Stories from "../../componants/stories/Stories";
import "./home.css";
import { useTheme } from "../../componants/theme/ThemeContext";
import Share from "../../componants/share/Share";


function Home() {
    const { theme } = useTheme();
    return (
        <div className={`home ${theme}`}>
            <Stories />
            <Share />
            <Post />
        </div>
    )
}

export default Home