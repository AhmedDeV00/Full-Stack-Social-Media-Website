import { useState } from 'react'
import './update.css'
import { makeRequest } from '../../axios'
import { useQueryClient, useMutation } from '@tanstack/react-query'

function Update({ setOpenUpdate, user }) {

    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)

    const [texts, setTexts] = useState({
        name: "",
        city: "",
        website: "",
    })

    const upload = async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file)
            const res = await makeRequest.post("/upload", formData);
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    const queryClient = useQueryClient();

    // Mutations
    const mutation = useMutation({
        mutationFn: (user) =>
            makeRequest.put("/users", user),
        onSuccess: () => {
            // Invalidate and refetch the likes or posts query after mutation
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
    });

    const handleClick = async (e) => {
        e.preventDefault();
        let coverURL;
        let profileURL;

        coverURL = cover ? await upload(cover) : user.coverPic;
        profileURL = profile ? await upload(profile) : user.profilePic

        mutation.mutate({
            ...texts,
            coverPic: coverURL,
            profilePic: profileURL
        });
        setOpenUpdate(false);
    };

    return (
        <div className='update'>
            Update
            <form>
                <input type="file" onChange={e => setCover(e.target.files[0])} />
                <input type="file" onChange={e => setProfile(e.target.files[0])} />
                <input type="text" name='name' onChange={handleChange} value={texts.name} />
                <input type="text" name='city' onChange={handleChange} value={texts.city} />
                <input type="text" name='website' onChange={handleChange} value={texts.website} />
                <button onClick={handleClick} >Update</button>
            </form>
            <button onClick={() => setOpenUpdate(false)}>X</button>
        </div>
    )
}

export default Update