import VoteData from "../entity/VoteData";

export default function(voteData: VoteData) {
    return {
        pitch: voteData.pitch?.filter(v => !!v.song && !!v.producer),
        voice: voteData.voice?.filter(v => !!v.song && !!v.producer),
        funny: voteData.funny?.filter(v => !!v.song && !!v.producer),
        content: voteData.content?.filter(v => !!v.song && !!v.producer),
        original: voteData.original?.filter(v => !!v.song && !!v.producer),
        sleep: voteData.sleep?.filter(v => !!v.song && !!v.producer),
        unit: voteData.unit?.filter(v => !!v),
        rookie: voteData.rookie?.filter(v => !!v),
        grow: voteData.grow?.filter(v => !!v),
        master: voteData.master?.filter(v => !!v),
        custom: voteData.custom,
        message: voteData.message
    }
}