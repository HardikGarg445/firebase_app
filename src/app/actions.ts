'use server';
import { refineEventBlurb as refineEventBlurbFlow, RefineEventBlurbInput } from '@/ai/flows/event-blurb-refinement';

export async function handleRefineBlurb(description: string) {
  try {
    if (!description) {
      return { refinedBlurb: '', error: 'Description cannot be empty.' };
    }
    const input: RefineEventBlurbInput = { description };
    const result = await refineEventBlurbFlow(input);
    return { refinedBlurb: result.refinedBlurb, error: null };
  } catch (error) {
    console.error(error);
    return { refinedBlurb: '', error: 'Failed to refine blurb. Please try again.' };
  }
}
