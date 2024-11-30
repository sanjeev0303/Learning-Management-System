import React from 'react'

type GroupSettingsFormProps = {
    groupId: string
}

const GroupSettingsForm = ({ groupId }: GroupSettingsFormProps) => {

    const {
        data,
        register,
        errors,
        onUpdate,
        isPending,
        previewIcon,
        previewThumbnail,
        onJsonDescription,
        setJsonDescription,
        setOnDescription,
        onDescription,
    } = useGroupSettings(groupId)

  return (
    <div>GroupSettingsForm</div>
  )
}

export default GroupSettingsForm
