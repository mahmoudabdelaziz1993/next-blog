import React from 'react'

type props = {
    params: {
        locale: string
        id: string
    }
}
function EditPostPage({ params: { locale, id } }: props) {
    return (
        <div>EditPostPage</div>
    )
}

export default EditPostPage